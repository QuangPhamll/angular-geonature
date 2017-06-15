import { Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public geonature_image;
  const
  nav = [{}];
  constructor() {
    this.nav = [{route: '/accueil', appName: 'Accueil', icon: 'home'},
                {route: '/synthese', appName: 'Synthèse', icon: 'assessment'},
                {route: '/contact-faune', appName: 'Contact Faune', icon: 'pets'},
                {route: '/contact-flore', appName: 'Contact Flore', icon: 'filter_vintage'},
                {route: '/flore-station', appName: 'Flore Station', icon: 'local_florist'},
                {route: '/suivi-flore', appName: 'Suivi Flore', icon: 'visibility'},
                {route: '/parametres', appName: 'Paramètres', icon: 'settings'},
                {route: '/suivi-chiro', appName: 'Suivi Chiro', icon: 'youtube_searched_for'},
                {route: '/exports', appName: 'Exports', icon: 'cloud_download'},
                {route: '/prospections', appName: 'Prospections', icon: 'feedback'}
                ]
  }

  ngOnInit() {
      this.geonature_image = require ('./../../images/geonature_image2.png') as string;
  }
}
