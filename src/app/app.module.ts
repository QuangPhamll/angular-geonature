/// <reference path="./typings/require.d.ts"/>
import 'leaflet';
import 'leaflet.vectorgrid';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'reflect-metadata';
import 'leaflet/dist/leaflet.css';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import 'hammerjs';
import { MaterialModule, MdIconModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


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
    AccueilComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    MdIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
