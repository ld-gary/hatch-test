import { Component, Input, OnInit } from '@angular/core';
import { DailyGiftState } from 'src/app/interfaces/models/DailyGift';

@Component({
  selector: 'app-daily-gift',
  templateUrl: './daily-gift.component.html',
  styleUrls: ['./daily-gift.component.css']
})
export class DailyGiftComponent implements OnInit {

  @Input()
  dailyGift: DailyGiftState;

  constructor() { }

  ngOnInit(): void {
  }

}
