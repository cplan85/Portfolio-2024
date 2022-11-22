import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  profileSrc: string ='../assets/images/profile3b.jpg';
  profileHoverSrc: string = '../assets/images/profile3b_hover.jpg';
  profileOutSrc: string = '../assets/images/profile3b.jpg';

  hackathonSrc: string ='../assets/images/hackathon-1.jpg';
  hackathonHoverSrc: string='../assets/images/hackathon-1_hover.jpg';
  hackathonOutSrc: string ='../assets/images/hackathon-1.jpg';
  

  ngOnInit(): void {
  }

}
