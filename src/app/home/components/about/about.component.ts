import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  profileSrc: string ='./assets/images/profile4_hover.jpg';
  profileHoverSrc: string = './assets/images/profile4.jpg';
  profileOutSrc: string = './assets/images/profile4_hover.jpg';

  hackathonSrc: string ='./assets/images/nyc_profile.jpg';
  hackathonHoverSrc: string='./assets/images/nyc_profile_hover.jpg';
  hackathonOutSrc: string ='./assets/images/nyc_profile.jpg';
  

  ngOnInit(): void {
  }

}
