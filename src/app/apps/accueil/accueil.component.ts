import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  public geonature_image;
  constructor() {
  }

  ngOnInit() {
   this.geonature_image = require <any> ('./../../../images/geonature_image3.png');
  }

}
