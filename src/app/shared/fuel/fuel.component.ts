import { Component, Input, OnInit } from '@angular/core';
import { Fuel } from 'src/app/interfaces/models/Fuel';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {

  @Input()
  fuel: Fuel;

  constructor() { }

  ngOnInit(): void {
  }

}
