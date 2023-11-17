import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hall.component.html',
  styleUrl: './hall.component.css'
})
export class HallComponent {
        hall(){
          alert('Welcome to hall')
        }
}
