import { Component, Input, OnInit } from '@angular/core';
import { UserAppProfile } from 'src/app/interfaces/models/UserAppProfile';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent implements OnInit {

  @Input()
  userProfile: UserAppProfile;

  constructor() { }

  ngOnInit(): void {
  }

}
