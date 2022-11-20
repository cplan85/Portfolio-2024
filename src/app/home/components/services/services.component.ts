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
  tsSrc: string='../../../../assets/icons/typescript-icon.svg';

  ngSrc: string='../../../../assets/icons/angular-icon-1.svg';
  reactSrc: string='../../../../assets/icons/react.svg';
  bsSrc: string='../../../../assets/icons/bootstrap-icon.svg';
  matSrc: string='../../../../assets/icons/material-icon.svg';
  sassSrc: string='../../../../assets/icons/sass-icon.svg';

  expressSrc: string='../../../../assets/icons/express-icon2.svg';
  nodejsSrc: string='../../../../assets/icons/nodejs-icon.svg';
  
  mongodbSrc: string='../../../../assets/icons/mongodb-icon.svg';
  postgresSrc: string='../../../../assets/icons/postgresql-icon.svg';
  bashSrc: string='../../../../assets/icons/bash-icon.svg';
 
  aiSrc: string='../../../../assets/icons/illustrator-icon.svg';
  psSrc: string='../../../../assets/icons/photoshop-icon.svg';

  jestSrc: string ='../../../../assets/icons/jest-icon.svg';
  karmaSrc: string='../../../../assets/icons/karma-icon.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
