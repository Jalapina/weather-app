import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private _https:HttpClient) { }

  getWeather(position){
    console.log(position)
    return this._https.get("https://api.openweathermap.org/data/2.5/forecast/daily?lat="+ position.latitude +"&lon="+position.longitude+"&cnt=4&units=imperial&appid=0b06c0ee98969574f9f671e32e66fdbd")
  }
  

}
