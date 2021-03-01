import { Component, Input, OnInit } from '@angular/core';
import { FusionCredits } from 'src/app/interfaces/models/FusionCredits';

@Component({
  selector: 'app-fusion-credits',
  templateUrl: './fusion-credits.component.html',
  styleUrls: ['./fusion-credits.component.css']
})
export class FusionCreditsComponent implements OnInit {

  @Input()
  fusionCredits: FusionCredits[];
  @Input()
  carManufacturerEnumMap: any;

  constructor() { }

  ngOnInit(): void {
  }

}
