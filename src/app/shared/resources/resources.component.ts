import { Component, Input, OnInit } from '@angular/core';
import { Resource } from 'src/app/interfaces/models/Resource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  @Input()
  userResources: Resource[];
  @Input()
  allResources: Resource[];

  constructor() { }

  ngOnInit(): void {
  }

  getBgUrl(imageName: string): string {
    return `https://rrimages.azureedge.net/16/resources/${imageName}.png`;
  }

}
