import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-contact-flore',
  templateUrl: './contact-flore.component.html',
  styleUrls: ['./contact-flore.component.css'],
  providers: [ MapService]

})
export class ContactFloreComponent implements OnInit {
  constructor(private mapService: MapService) {}

  ngOnInit() {}

}
