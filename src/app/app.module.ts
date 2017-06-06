import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';
import { MaterialModule, MdIconModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactFauneComponent } from './contact-faune/contact-faune.component';
import { ContactFloreComponent } from './contact-flore/contact-flore.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactFauneComponent,
    ContactFloreComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MdIconModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
