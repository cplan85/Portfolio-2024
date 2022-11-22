import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  constructor(private scroller: ViewportScroller) { }

  @ViewChild('homeButton') homeButton!: ElementRef;

  clicked: boolean = false;
  ngAfterViewInit(): void {
    
    let clicked = this.clicked;
    let homeButton = this.homeButton;
   // setTimeout(function(){ if(!clicked  ) { homeButton.nativeElement.click()}; }, 2000);
    //if(!this.clicked) { this.homeButton.nativeElement.click()}
    this.clicked = true;

  }

  goToSection(str: string){
    document.getElementById(str)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
