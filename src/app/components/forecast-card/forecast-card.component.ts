import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  standalone: true, // 🔥 ESSENCIAL
  imports: [CommonModule],
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css'] // 🔥 plural
})
export class ForecastCardComponent {
  @Input() day: any;
}