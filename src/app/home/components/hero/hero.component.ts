import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {

  ​@ViewChild('videoRef', { static: true }) videoRef!: ElementRef

  constructor() { }

  ngAfterViewInit(): void {

    ​const media = this.videoRef.nativeElement
    ​media.muted = true 
    ​media.play() 

  }

}
