import { AfterViewInit, Component, Directive, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent implements AfterViewInit {

  @ViewChild('all_button') allButton!: ElementRef;

  @ViewChild('angular') angular!: ElementRef;
  constructor() { }


  ngAfterViewInit() {

    //let angularButton:HTMLElement= document.getElementById('angular-button') as HTMLElement;
    this.allButton.nativeElement.click();
  }
}
