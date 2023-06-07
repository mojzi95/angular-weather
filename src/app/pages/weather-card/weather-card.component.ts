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

  

  constructor(private weatherService: WeatherService) { }
  @Input() public cityName: string = "Nádudvar"
 
  
  
  searchCountry(){
    console.log(this.cityName)
    return this.cityName
   
  }
  

  ngOnInit() {

   this.weatherService.getWeatherForCity(this.cityName).subscribe(data => {this.weatherData = data; console.log(this.weatherData)
  
    this.srTime = new Date(this.weatherData.sys.sunrise*1000).getHours()+":"+new Date(this.weatherData.sys.sunrise*1000).getMinutes()
    this.ssTime = new Date(this.weatherData.sys.sunset*1000).getHours()+":"+new Date(this.weatherData.sys.sunset*1000).getMinutes()
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
