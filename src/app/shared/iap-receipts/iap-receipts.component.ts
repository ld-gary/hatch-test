import { Component, Input, OnInit } from '@angular/core';
import { UserIAPReceipt } from 'src/app/interfaces/models/UserIAPReceipt';

@Component({
  selector: 'app-iap-receipts',
  templateUrl: './iap-receipts.component.html',
  styleUrls: ['./iap-receipts.component.css']
})
export class IapReceiptsComponent implements OnInit {

  @Input()
  userIAPReceipts: UserIAPReceipt[];

  constructor() { }

  ngOnInit(): void {
  }

}
