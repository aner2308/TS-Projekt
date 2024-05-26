import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  apply() {
    alert("Ansökningsperioden har tyvärr stängt för i år. Du kan ansöka för Vårterminen 2025 mellan 7/8- 12/10.")
  }
}
