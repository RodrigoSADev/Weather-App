import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiKey = '45e8b5ceb904739527adf6dcc9c687d0';

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<Weather> {
    return this.http.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&node=json&appid=${this.apiKey}`
    );
  }
}
