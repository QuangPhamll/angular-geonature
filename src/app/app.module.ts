// Angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

// Use for Angular Material
import 'hammerjs';
import { MaterialModule, MdIconModule, MdNativeDateModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular created component
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactFauneComponent } from './apps/contact-faune/contact-faune.component';
import { ContactFloreComponent } from './apps/contact-flore/contact-flore.component';
import { AccueilComponent } from './apps/accueil/accueil.component';
import { MapComponent } from './components/map/map.component';
import { CfFormComponent } from './apps/contact-faune/cf-form/cf-form.component';

// Service
import { MapService } from './services/map.service';
import {GeocodingService} from './services/geocoding.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactFauneComponent,
    ContactFloreComponent,
    AccueilComponent,
    MapComponent,
    CfFormComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    MdNativeDateModule,
    MdIconModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ MapService, GeocodingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
