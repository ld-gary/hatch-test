import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeightService } from './services/height.service';

import { AccountInformationComponent } from './shared';
import { AugmentsComponent } from './shared/augments/augments.component';
import { CarsComponent } from './shared/cars/cars.component';
import { DailyGiftComponent } from './shared/daily-gift/daily-gift.component';
import { FtueComponent } from './shared/ftue/ftue.component';
import { FuelComponent } from './shared/fuel/fuel.component';
import { FusionCreditsComponent } from './shared/fusion-credits/fusion-credits.component';
import { IapReceiptsComponent } from './shared/iap-receipts/iap-receipts.component';
import { OfferReceiptsComponent } from './shared/offer-receipts/offer-receipts.component';
import { PlayerErrorLogsComponent } from './shared/player-error-logs/player-error-logs.component';
import { ResourcesComponent } from './shared/resources/resources.component';
import { SocialDetailsComponent } from './shared/social-details/social-details.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AccountInformationComponent,
    AugmentsComponent,
    CarsComponent,
    DailyGiftComponent,
    FtueComponent,
    FuelComponent,
    FusionCreditsComponent,
    IapReceiptsComponent,
    OfferReceiptsComponent,
    PlayerErrorLogsComponent,
    ResourcesComponent,
    SocialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [HeightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
