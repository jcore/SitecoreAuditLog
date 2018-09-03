using System.Collections.Generic;
using Feature.AuditLogService.Models;

namespace Feature.AuditLogService.Services
{
  public interface IAuditLogService
  {
    IEnumerable<LogEntry> GetLogEntries();
  }
}