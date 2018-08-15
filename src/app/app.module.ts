import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HallPageComponent} from './hall-page/hall-page.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BuyDialogComponent } from './components/buy-dialog/buy-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HallPageComponent,
    SiteLayoutComponent,
    BuyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule
  ],
  entryComponents: [BuyDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
