import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  

  private apiKey = 'cb409cf6e01f69939481288e133a7492';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}weather?q=${city}&units=metric&appid=${this.apiKey}`);
  }

  getForecast(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}forecast?q=${city}&units=metric&appid=${this.apiKey}`);
  }
}
