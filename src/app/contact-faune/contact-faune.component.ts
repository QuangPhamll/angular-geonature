import { Component, OnInit, ViewChild } from '@angular/core';

import MapService from '../services/map.service';
import {GeocodingService} from '../services/geocoding.service';

import {Location} from '../core/location.class';
import {Map} from 'leaflet';


@Component({
  selector: 'app-contact-faune',
  templateUrl: './contact-faune.component.html',
  styleUrls: ['./contact-faune.component.css'],
})
export class ContactFauneComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
