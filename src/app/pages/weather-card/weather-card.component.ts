import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, concatMap, filter, map, zip } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';


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
  public weatherData: any;
  public srTime: any;
  public ssTime: any;
  public searchTerm: any;
  public weatherCondition: any;
  public imageSrc: any;

  

  constructor(private weatherService: WeatherService) { }
    public cityName: string = "Budapest"
 
  
  
  searchCountry(){
    
      this.weatherService.getWeatherForCity(this.cityName).subscribe(
        data => {
          this.weatherData = data;
          //console.log(this.weatherData);
          this.weatherCondition = this.weatherData.weather[0].main
          this.srTime = new Date(this.weatherData.sys.sunrise*1000).getHours()+":"+new Date(this.weatherData.sys.sunrise*1000).getMinutes()
          this.ssTime = new Date(this.weatherData.sys.sunset*1000).getHours()+":"+new Date(this.weatherData.sys.sunset*1000).getMinutes()
          console.log(this.weatherCondition)
          this.setImage()
      })
  }

  setImage() {
    if(this.weatherCondition === 'Clear') {
      this.imageSrc = 'assets/icons8-sun.gif'
    } else if(this.weatherCondition === 'Rain') {
      this.imageSrc = 'assets/icons8-rain.gif'
     } else if(this.weatherCondition === 'Clouds') {
      this.imageSrc = 'assets/icons8-partly-cloudy-day.gif'
    } else if (this.weatherCondition === 'Snow'){
      this.imageSrc = 'assets/icons8-snow.gif'
    }
  } 
  

  ngOnInit() {

   this.weatherService.getWeatherForCity(this.cityName).subscribe(
    data => {
      this.weatherData = data;
      this.weatherCondition = this.weatherData.weather[0].main
      
      //console.log(this.weatherData);
      this.setImage()
   })
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
