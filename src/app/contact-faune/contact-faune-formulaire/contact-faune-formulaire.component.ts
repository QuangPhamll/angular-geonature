import { Component, OnInit, NgModule } from '@angular/core';
import MapService from '../../services/map.service';

@Component({
  selector: 'app-contact-faune-formulaire',
  templateUrl: './contact-faune-formulaire.component.html',
  styleUrls: ['./contact-faune-formulaire.component.css'],
})

export class ContactFauneFormulaireComponent implements OnInit {
  selectedLangue: string;
  langues = [
    {value: 'francais', viewValue: 'Francais'},
    {value: 'latin', viewValue: 'Latin'}
  ];
  public result;
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
  constructor(private mapService: MapService) {
    this.result = {
      type : '',
      coordinates: []
    }
   }

  ngOnInit() {
  }
  showResult() {
    let result;
    result = this.mapService.marker.toGeoJSON();
    this.result.type = result.geometry.type;
    this.result.coordinates = result.geometry.coordinates;
  }
}
