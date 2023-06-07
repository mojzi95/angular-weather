import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiID:string = "c1956be1bf90679aa145f8a6f92ac8a6";

  constructor(private http: HttpClient) { }


  getWeatherForCity(cityName: string): Observable<any> {
    const path = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+", &APPID="+this.apiID+"&units=metric";
    
    return this.http.get(path);
  }

  
}
