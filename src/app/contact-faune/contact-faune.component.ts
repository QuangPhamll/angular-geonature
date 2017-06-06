import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-faune',
  templateUrl: './contact-faune.component.html',
  styleUrls: ['./contact-faune.component.css']
})
export class ContactFauneComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 3, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 3, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
