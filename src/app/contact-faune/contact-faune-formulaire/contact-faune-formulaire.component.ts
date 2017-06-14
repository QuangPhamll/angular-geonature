import { Component, OnInit, NgModule } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

}
