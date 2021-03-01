import { Component, Input, OnInit } from '@angular/core';
import { FTUEProgress } from 'src/app/interfaces/models/FTUEProgress';

@Component({
  selector: 'app-ftue',
  templateUrl: './ftue.component.html',
  styleUrls: ['./ftue.component.css']
})
export class FtueComponent implements OnInit {

  @Input()
  ftueProgress: FTUEProgress;
  @Input()
  config: any;

  constructor() { }

  ngOnInit(): void {
  }

}
