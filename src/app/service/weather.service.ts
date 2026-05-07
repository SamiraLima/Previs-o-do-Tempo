import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Transfoma a classe em um service global, pode ser usado em qualquer componente.
@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  //Chave API
  private apiKey = 'cfd81d5b676f848eec3d57c40bb336e3'

  //HttpClient = classe do Angular para requisições


  // Construtor que recebe (injeta) a dependência HttpClient,
  // criando a propriedade http para ser usada nos métodos da classe
  constructor(private http: HttpClient) {}

  // Método que recebe o nome da cidade e retorna um Observable com os dados do clima.
  // O Observable representa uma resposta assíncrona da API, ou seja,
  // os dados chegam no futuro e precisam ser tratados com subscribe().
  getCurretWeather(city: string): Observable<any>{

    return this.http.get ('https://api.openweathermap.org/data/2.5/weather',

      {
        params:{
          q: city,
          appid: this.apiKey,
          units: "metric",
          lang: "pt_br"
        }

      });
  }

  getForecast(city: string): Observable<any>{

    return this.http.get('https://api.openweathermap.org/data/2.5/forecast',{

      params:{
        q: city,
        appid: this.apiKey,
        units: 'metric',
        lang: 'pt_br'
      }
    })
  }
}
