import { Component, OnInit, ViewChild } from '@angular/core';

import { MapService } from '../../services/map.service';
import {GeocodingService} from '../../services/geocoding.service';

import {Map} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {

    address: string;
    public map: Map;
  constructor(public geocoder: GeocodingService, public mapService: MapService) {
        this.address = '';
        this.mapService.editing = false;
        this.mapService.removing = false;
  }

  ngOnInit() {
    this.mapService.disableMouseEvent('add-marker');
    this.mapService.disableMouseEvent('remove-marker');
    this.mapService.disableMouseEvent('goto');
    this.mapService.disableMouseEvent('place-input');
    this.mapService.initialize();
    this.mapService.onMapClick();
    this.map = this.mapService.map;

  }

  goto() {
        if (!this.address) { return; }

        this.mapService.search(this.address);
        // this.geocoder.geocode(this.address)
        // .subscribe(location => {
        //     this.map.fitBounds(location.viewBounds, {});
        //     this.address = location.address;
        // }, error => console.error(error));
    }

}
