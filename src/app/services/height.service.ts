import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeightService {

  constructor() { }

  navHeight = new BehaviorSubject<number>(0);
  navHeight$ = this.navHeight.asObservable();
}
