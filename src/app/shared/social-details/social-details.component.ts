import { Component, Input, OnInit } from '@angular/core';
import { SocialAccount } from 'src/app/interfaces/models/SocialAccount';

@Component({
  selector: 'app-social-details',
  templateUrl: './social-details.component.html',
  styleUrls: ['./social-details.component.css']
})
export class SocialDetailsComponent implements OnInit {

  @Input()
  socialAccounts: SocialAccount[];

  constructor() { }

  ngOnInit(): void {
  }

}
