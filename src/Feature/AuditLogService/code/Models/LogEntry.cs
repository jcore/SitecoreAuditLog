using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Feature.AuditLogService.Models
{
  public class LogEntry
  {
    public string Time { get; set; }
    public string User { get; set; }
    public string Action { get; set; }
  }
}