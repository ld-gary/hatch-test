import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeightService } from './services/height.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hutch Admin Portal';

  @ViewChild('navEl') navEl: ElementRef;

  constructor(
    private heightService: HeightService
  ){

  }

  ngAfterViewInit(): void {
    // slightly hacky but allows an accurate measurement of the height of the nav element without
    // getting a vastly higher value on initial render
    const interval = setInterval(() => {
      if(this.navEl.nativeElement.offsetHeight < 100) {
        this.heightService.navHeight.next(this.navEl.nativeElement.offsetHeight);
        clearInterval(interval);
      }
    },200);
  }
}
