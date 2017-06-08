import { Component, OnInit } from '@angular/core';
import { Map, GeoJSON } from 'leaflet';


@Component({
  selector: 'app-contact-flore',
  templateUrl: './contact-flore.component.html',
  styleUrls: ['./contact-flore.component.css'],

})
export class ContactFloreComponent implements OnInit {
 public map: Map;
  constructor() { }

  ngOnInit() {
    this.map = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        // tslint:disable-next-line:max-line-length
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    }).addTo(this.map);

    L.control.scale().addTo(this.map);
  }

}
