import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  workExperienceYears: number = 0 ;

  constructor() { }

  profileSrc: string ='./assets/images/profile4_hover.jpg';
  profileHoverSrc: string = './assets/images/profile4.jpg';
  profileOutSrc: string = './assets/images/profile4_hover.jpg';

  hackathonSrc: string ='./assets/images/nyc_profile.jpg';
  hackathonHoverSrc: string='./assets/images/nyc_profile_hover.jpg';
  hackathonOutSrc: string ='./assets/images/nyc_profile.jpg';
  

  ngOnInit(): void {

    this.workExperienceYears = this.calculateWorkExperienceYears();
  }

  calculateWorkExperienceYears(): number {
    const startDate = new Date('2022-10-01');
    const currentDate = new Date();
    
    const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12
      + currentDate.getMonth() - startDate.getMonth();

    const years = totalMonths / 12;
    return parseFloat((years).toFixed(1)); // Ensure the result is up to 2 decimal places
  }

}
