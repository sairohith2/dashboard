import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  currentWeather: any;
  forecast: any;
  clearInput: boolean = false;

  constructor(private weatherService: WeatherService) {}
  // loadWeather(city: string) {
  //   this.weatherService.getCurrentWeather(city).subscribe({
  //     next: data => {
  //       this.currentWeather = data;
  //     },
  //     error: err => {
  //       alert('City not found. Try with another.');
  //       this.currentWeather = null;
  //       this.forecast = null;
      
  //     }
  //   });

  //   this.weatherService.getForecast(city).subscribe({
  //     next: data => {
  //       this.forecast = data;
  //     },
  //     error: err => {
  //       this.forecast = null;
  //     }
  //   });
  // }

  loadWeather(city: string) {
    if (!city) return;

    this.clearInput = false;

    this.weatherService.getCurrentWeather(city).subscribe({
      next: (data) => {
        this.currentWeather = data;
        this.clearInput = false;
      },
      error: (err) => {
        alert('City not Found.!! Try Again.!!');
        this.clearInput = true;
      }
    });

    this.weatherService.getForecast(city).subscribe({
      next: (data) => {
        this.forecast = data;
      },
      error: (err) => {
        this.forecast = null;
      }
    });
  }
}