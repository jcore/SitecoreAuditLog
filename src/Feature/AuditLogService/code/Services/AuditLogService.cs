using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using Feature.AuditLogService.Models;
using Sitecore;
using Sitecore.ApplicationCenter.Applications;
using Sitecore.Diagnostics;
using Sitecore.IO;

namespace Feature.AuditLogService.Services
{
  public class AuditLogService : IAuditLogService
  {
    public IEnumerable<LogEntry> GetLogEntries()
    {
      var logLines = new List<LogEntry>();
      var dataFolderPath = Path.GetFullPath(FileUtil.MapPath(Sitecore.Configuration.Settings.LogFolder));
      var logsFolder = new DirectoryInfo(dataFolderPath);
      foreach (FileInfo file in logsFolder.GetFiles("log.*.txt"))
      {
        try
        {
          using (StreamReader sr = File.OpenText(file.FullName))
          {
            var s = string.Empty;
            while ((s = sr.ReadLine()) != null)
            {
              if (s.Contains("AUDIT"))
              {
                var values = s.Split(' ');
                if (values.Length >= 7)
                {
                  logLines.Add(new LogEntry
                  {
                    Time = values[1],
                    User = values[5].Replace(":",""),
                    Action = s.Substring(s.IndexOf("):", StringComparison.Ordinal)+2).Trim()
                  });
                }
              }
            }
          }
        }
        catch (Exception ex)
        {
          Log.Error(ex.Message,ex, this);
        }
      }

      return logLines;
    }
  }
}