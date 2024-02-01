import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Weather } from '../../models/weather.interface';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() weatherData: Weather | null = null;
  ngOnInit(): void {
    console.log('Dados recebidos do pai :>> ', this.weatherData);
  }
  minTempIcon = faTemperatureLow;
  maxTempIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
