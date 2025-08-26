import { Component, Input } from '@angular/core';

export interface ForecastItem {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: { description: string }[];
}


export interface WeatherForecast {
  list: ForecastItem[];
}

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {
  @Input() forecast: WeatherForecast | null = null;
}
