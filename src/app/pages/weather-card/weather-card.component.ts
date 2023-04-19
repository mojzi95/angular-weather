import { state, trigger } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  animations: [
   
  ]
})
export class WeatherCardComponent {
  public show:boolean = true;
  public linkText:any = 'See More';

  ngOnInit() {
    
  }

  seeMore() {
    this.show = !this.show;

    if(this.show) {
      this.linkText= 'See More'
    } else {
      this.linkText = 'See Less'
    }
  }
}
