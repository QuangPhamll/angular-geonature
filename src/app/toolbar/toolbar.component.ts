import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MdSidenav} from '@angular/material';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('sidenav') sideNav: MdSidenav;
  constructor() { }

  ngOnInit() {
  }

  onSidenavToggle() {
    this.sideNav.toggle();
  }
}
