import { AfterViewInit, Component, Directive, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent implements AfterViewInit {

  imageSourcesArray: string[] = [
    './assets/images/Megablok-5.jpg',
    './assets/images/Megablok-1.jpg',
    './assets/images/Megablok-3.jpg',
    './assets/images/Megablok-4.jpg',
    './assets/images/Megablok-2.jpg',
    './assets/images/Megablok-6.jpg',
    // Add more image paths as needed
  ];

  portalImgArray: string[] = [
    './assets/images/Portal-1.jpg',
    './assets/images/Soporte-2.jpg',
    './assets/images/Rent-reservas1.jpg',
    './assets/images/Incidencias-1.jpg',
    // './assets/images/Soporte-1.jpg',
    './assets/images/Mblock-calendarOnly.jpg',
  ];

  imageSource: string = "";
  portalImgSource: string = "";

  @ViewChild('all_button') allButton!: ElementRef;

  @ViewChild('angular') angular!: ElementRef;
  constructor() {

    this.imageSource = this.getRandomImageSource();
    this.portalImgSource = this.getRandomPortalImgSource();
   }

   getRandomImageSource(): string {
    const randomIndex = Math.floor(Math.random() * this.imageSourcesArray.length);
    // Return the image source at the random index
    return this.imageSourcesArray[randomIndex];
  }

  getRandomPortalImgSource(): string {
    const randomIndex = Math.floor(Math.random() * this.portalImgArray.length);
    // Return the image source at the random index
    return this.portalImgArray[randomIndex];
  }


  ngAfterViewInit() {

    //let angularButton:HTMLElement= document.getElementById('angular-button') as HTMLElement;
    this.allButton.nativeElement.click();
  }
}
