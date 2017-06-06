import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  const
  nav = [{}];
  constructor() {
    this.nav = [{route: '/accueil', appName: 'Accueil', icon: 'home'},
                {route: '/contact-faune', appName: 'Contact Faune', icon: 'pets'},
                {route: '/contact-flore', appName: 'Contact Flore', icon: 'filter_vintage'}
                ]
  }

  ngOnInit() {
  }

}
