import { Component, OnInit, ViewChild } from '@angular/core';

import MapService from '../services/map.service';
import {GeocodingService} from '../services/geocoding.service';

import {Location} from '../core/location.class';
import {Map} from 'leaflet';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
  providers: [MapService, GeocodingService]
})
export class CarteComponent implements OnInit {

    address: string;
    private map: Map;
  constructor(private geocoder: GeocodingService, private mapService: MapService) {
        this.address = '';
        this.mapService.editing = false;
        this.mapService.removing = false;
  }

  ngOnInit() {
    this.mapService.disableMouseEvent('add-marker');
    this.mapService.disableMouseEvent('remove-marker');
    this.mapService.initialize();
    this.mapService.onMapClick();
    this.map = this.mapService.map;

  }

  goto() {
        if (!this.address) { return; }

        this.geocoder.geocode(this.address)
        .subscribe(location => {
            this.map.fitBounds(location.viewBounds, {});
            this.address = location.address;
        }, error => console.error(error));
    }

}
