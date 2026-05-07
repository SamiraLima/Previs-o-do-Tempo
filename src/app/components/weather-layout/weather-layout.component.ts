import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { WeatherService } from '../../service/weather.service';
import { ForecastComponent } from '../forecast/forecast.component';
import { HighlightsComponent } from '../highlights/highlights.component';

@Component({
  selector: 'app-weather-layout',
  standalone: true,
  imports: [SideBarComponent, ForecastComponent, HighlightsComponent],
  templateUrl: './weather-layout.component.html',
  styleUrls: ['./weather-layout.component.css']
})
export class WeatherLayoutComponent implements OnInit {

  //Guarda o clima atual
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  buscarCidade(city: string) {
    this.weatherService.getCurretWeather(city)
      .subscribe({
        next: (data) => {
          this.weatherData = data;
          this.buscarForecast(city);

        },
        error: (err) => {
          console.error('Erro ao buscar clima:', err);
        }
      });
  }

  ngOnInit() {
    this.buscarCidade('São Paulo');
  }

  
//Guarda a previsão da semana 
forecastData: any[] = [];

buscarForecast(city: string) {
  this.weatherService.getForecast(city)
    .subscribe(data => {
      this.processarDias(data.list);
    });
}

processarDias(list: any[]) {
  const dias: any = {};

  list.forEach(item => {
    const data = item.dt_txt.split(' ')[0]; // pega só a data

    if (!dias[data]) {
      dias[data] = item; // pega 1 por dia
    }
  });

  this.forecastData = Object.values(dias).slice(0, 6);
}
}