using System;
using System.Collections.Generic;
using System.Web.Mvc;
using Feature.AuditLogService.Services;
using Sitecore.Diagnostics;
using Sitecore.Services.Core;
using Sitecore.Services.Infrastructure.Web.Http;

namespace Feature.AuditLogService.Controllers
{
  [ServicesController("auditlog/log")]
  [Authorize]
  public class AuditLogController : ServicesApiController
  {
    private readonly IAuditLogService _service;

    public AuditLogController()
    {
      _service = new Services.AuditLogService();
    }

    public AuditLogController(IAuditLogService service)
    {
      _service = service;
    }

    [HttpGet]
    public System.Web.Http.IHttpActionResult DefaultAction()
    {
      return Ok("This is default action of DataImportController");
    }

    [System.Web.Http.AcceptVerbs("GET")]
    [HttpGet]
    public System.Web.Http.IHttpActionResult GetEntries()
    {
      var messages = new List<string>();
      try
      {
        return Ok(new
        {
          data = _service.GetLogEntries(),
          messages = messages
        });
      }
      catch (Exception ex)
      {
        Log.Error(ex.Message, ex,this);
        messages.Add(ex.StackTrace);
      }

      return Ok(new
      {
        data = new List<string>(),
        messages = messages
      });
    }
  }
}