import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-bar',
  imports: [FormsModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  // Criamos uma variável (city) ligada ao input.
  city: string = '';

  // Criamos um EventEmitter (@Output) que serve como canal de comunicação com o componente pai.
  @Output() search = new EventEmitter <string>();

  // Também usamos @Input() para receber os dados do pai (weather) e exibir na sidebar.
  @Input() weather: any;

  // No método onSearch(), pegamos o valor digitado, validamos e usamos emit() para disparar um evento enviando esse valor.
  // O componente pai escuta esse evento e recebe o valor.
  onSearch(){
    if(this.city.trim()){
      this.search.emit(this.city)
    }
  }

}
