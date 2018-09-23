import { Component, OnInit } from '@angular/core';
import { SciLogoutService } from '@speak/ng-sc/logout';
import { ItemService } from '../item.service';
import { SortHeaderState } from '@speak/ng-bcl/table'; 
import { LogEntry } from './models/logentry';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.scss']
})
export class LogPageComponent implements OnInit {
  messages: any;
  isErrorResponse: boolean;
  isLoading: boolean;
  isNavigationShown:boolean = true;

  logEntries: LogEntry[] = [];
  constructor(
    public logoutService: SciLogoutService,
    public itemService: ItemService
  ) { }

  ngOnInit() {
    this.fetchLogEntries();
  }
  fetchLogEntries(): any {
    this.isLoading = true;
    this.isErrorResponse = false;
    this.itemService.fetchLogEntries().subscribe({
      next: data => {
        this.logEntries = data["data"] as LogEntry[];
        this.isLoading = false;
        this.messages = data["messages"];
      },
      error: error => {
        this.isErrorResponse = true;
        this.isLoading = false;
      }
    });
  }

  onSortChange(sortState: SortHeaderState[]) {
    this.logEntries.sort((a, b) => {
      let result = 0;
      sortState.forEach(header => {
        if (result !== 0) {
          return;
        }
        if (a[header.id] < b[header.id]) {
          if (header.direction === 'asc') {
            result = -1;
          } else if (header.direction === 'desc') {
            result = 1;
          }
        } else if (a[header.id] > b[header.id]) {
          if (header.direction === 'asc') {
            result = 1;
          } else if (header.direction === 'desc') {
            result = -1;
          }
        }
      });
      return result;
    });
  }
}
