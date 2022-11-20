import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  htmlSrc: string ='../../../../assets/icons/html-icon.svg';
  cssSrc: string ='../../../../assets/icons/css-icon.svg';
  jsSrc: string ='../../../../assets/icons/javascript-icon.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
