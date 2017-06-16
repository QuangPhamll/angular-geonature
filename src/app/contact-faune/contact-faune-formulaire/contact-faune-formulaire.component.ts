import { Component, OnInit, NgModule } from '@angular/core';
import { MapService } from '../../services/map.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-contact-faune-formulaire',
  templateUrl: './contact-faune-formulaire.component.html',
  styleUrls: ['./contact-faune-formulaire.component.css'],
})

export class ContactFauneFormulaireComponent implements OnInit {
  selectedLangue: string;
  public httpDone;
  langues = [
    {value: 'francais', viewValue: 'Francais'},
    {value: 'latin', viewValue: 'Latin'}
  ];
  public result;
  public gpsData;
  selectedTaxonomique: string;
  taxonomiques = [
    {value: 'Mammifières', viewValue: 'Mammifières'},
    {value: 'Oiseaux', viewValue: 'Oiseaux'},
    {value: 'Reptiles', viewValue: 'Reptiles'},
    {value: 'Amphibiens', viewValue: 'Amphibiens'},
    {value: 'Poissions', viewValue: 'Poissions'}
    ];
  taxons = [
    {value: 'Mammifières', viewValue: 'Mammifières'},
    {value: 'Oiseaux', viewValue: 'Oiseaux'},
    {value: 'Reptiles', viewValue: 'Reptiles'},
    {value: 'Amphibiens', viewValue: 'Amphibiens'},
    {value: 'Poissions', viewValue: 'Poissions'}
  ]
  constructor(private mapService: MapService, private http: Http) {
    this.result = {
      type : '',
      coordinates: []
    }
    this.httpDone = false;
    this.gpsData = {};
   }

  ngOnInit() {
  }
  showResult() {
    this.httpDone = false;
    let result;
    // tslint:disable-next-line:prefer-const
    result = this.mapService.marker.toGeoJSON();
    this.result.type = result.geometry.type;
    this.result.coordinates = result.geometry.coordinates;
    // tslint:disable-next-line:max-line-length
    this.http.get('http://nominatim.openstreetmap.org/reverse?format=json&lat=' + encodeURIComponent(this.result.coordinates[1]) + '&lon=' + encodeURIComponent(this.result.coordinates[0]) + '&zoom=18&addressdetails=1)')
    .map(res => res.json())
    .subscribe(results => {
      this.gpsData = results;
      this.httpDone = true;
      console.log(this.gpsData);
      });
  }
}
