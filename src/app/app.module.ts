import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherAPIService } from './weather-api.service'
import { NgxLoadingModule } from 'ngx-loading';
import { SkyconsModule } from 'ngx-skycons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    SkyconsModule,
  ],
  providers: [
    WeatherAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
