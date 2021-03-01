import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/models/Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  @Input()
  userCars: Car[];
  @Input()
  allCars: Car[];

  constructor() { }

  ngOnInit(): void {
  }

  getBgUrl(imageName: string): string {
    console.log(imageName);
    console.log(imageName, `https://rrimages.azureedge.net/16/cars/${imageName}_Thumb.png`);
    return `https://rrimages.azureedge.net/16/cars/${imageName}_Thumb.png`;
  }

}
