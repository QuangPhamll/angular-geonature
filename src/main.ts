import 'leaflet';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'reflect-metadata';
import 'leaflet/dist/leaflet.css';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
