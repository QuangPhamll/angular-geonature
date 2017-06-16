import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-contact-faune',
  templateUrl: './contact-faune.component.html',
  styleUrls: ['./contact-faune.component.css'],
  providers: [ MapService]
})
export class ContactFauneComponent implements OnInit {
  constructor(private mapService: MapService) {
  }

  ngOnInit() {
  }
}
