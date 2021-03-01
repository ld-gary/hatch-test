import { Component, Input, OnInit } from '@angular/core';
import { UserAugment } from 'src/app/interfaces/models/UserAugment';

@Component({
  selector: 'app-augments',
  templateUrl: './augments.component.html',
  styleUrls: ['./augments.component.css']
})
export class AugmentsComponent implements OnInit {

  @Input()
  userAugments: UserAugment[];
  @Input()
  allAugments: UserAugment[];

  constructor() { }

  ngOnInit(): void {
  }

  getBgUrl(imageName: string): string {
    return `https://rrimages.azureedge.net/16/augments/${imageName}.png`;
  }

}
