import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlights',
  imports: [CommonModule],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {

    @Input() weather: any;


}
