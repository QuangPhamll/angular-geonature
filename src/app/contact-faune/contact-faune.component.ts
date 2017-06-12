import { Component, OnInit, ViewChild } from '@angular/core';

import MapService from '../services/map.service';
import {GeocodingService} from '../services/geocoding.service';


import {Location} from '../core/location.class';

@Component({
  selector: 'app-contact-faune',
  templateUrl: './contact-faune.component.html',
  styleUrls: ['./contact-faune.component.css'],
  providers: [MapService, GeocodingService]

})
export class ContactFauneComponent implements OnInit {
tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private mapService: MapService) {
        this.mapService.editing = false;
        this.mapService.removing = false;
  }

  ngOnInit() {
    this.mapService.disableMouseEvent('add-marker');
    this.mapService.disableMouseEvent('remove-marker');
    this.mapService.initialize();
    this.mapService.onMapClick();
  }
}
