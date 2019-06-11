import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../weather-api.service'
import { concat } from 'rxjs/internal/observable/concat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private _weatherAPIService:WeatherAPIService) { }
  
  day
  coordinates:any = {}
  weather:any = { }
  currentWeather
  loading = false

  ngOnInit() {
  }

  getUserLocation():any{
    this.loading = true

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        setTimeout(()=>{
          this.coordinates.latitude = position.coords.latitude
          this.coordinates.longitude = position.coords.longitude
          this._weatherAPIService.getWeather(this.coordinates).subscribe(data =>{
            if(data){

              this.currentWeather = data["list"][0]
              this.weather = data
              this.loading = false
              this.weather.list.forEach(element => {
                console.log(element)
                if(element.weather[0].main == "Clear"){
                  element.weather[0].main = "clearday"
                }else if(element.weather[0].main == "Clouds")[
                  element.weather[0].main = "cloudy"
                ]
              });
            }
            console.log(this.weather.list)
          });
        },0)
      });      
    }else{
      console.log("GeoLocation is not supported on this browser")
    }
  }
}
