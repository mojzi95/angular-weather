import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  animations: [
    
  ]
})
export class WeatherCardComponent implements OnInit {
  public show:boolean = true;
  public linkText:any = 'See More';

  

  constructor() { }

  ngOnInit() {
   
  }



  seeMore(): void {
    this.show = !this.show 

    if(this.show) {
      this.linkText= 'See More'
    } else {
      this.linkText = 'See Less'
    }
  }
}
