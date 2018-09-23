import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  fetchLogEntries() {
    return this.http.get("/sitecore/api/ssc/auditlog/log/-/getentries");
  } 
}
