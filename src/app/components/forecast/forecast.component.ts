import { Component, Input } from '@angular/core';
import { ForecastCardComponent } from '../forecast-card/forecast-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast',
  standalone: true, // 🔥 ESSENCIAL
  imports: [CommonModule, ForecastCardComponent],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'] // 🔥 plural
})
export class ForecastComponent {
  @Input() forecastData: any[] = [];
}