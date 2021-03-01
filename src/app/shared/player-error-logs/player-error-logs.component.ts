import { Component, Input, OnInit } from '@angular/core';
import { LogEntry } from 'src/app/interfaces/models/LogEntry';

@Component({
  selector: 'app-player-error-logs',
  templateUrl: './player-error-logs.component.html',
  styleUrls: ['./player-error-logs.component.css']
})
export class PlayerErrorLogsComponent implements OnInit {

  @Input()
  logEntries: LogEntry[];

  constructor() { }

  ngOnInit(): void {
  }

}
