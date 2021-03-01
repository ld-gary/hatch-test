import { Component, Input, OnInit } from '@angular/core';
import { UserOfferReceipt } from 'src/app/interfaces/models/UserOfferReceipt';

@Component({
  selector: 'app-offer-receipts',
  templateUrl: './offer-receipts.component.html',
  styleUrls: ['./offer-receipts.component.css']
})
export class OfferReceiptsComponent implements OnInit {

  @Input()
  userOfferReceipts: UserOfferReceipt[];

  constructor() { }

  ngOnInit(): void {
  }

}
