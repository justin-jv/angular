import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bedroom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bedroom.component.html',
  styleUrl: './bedroom.component.css'
})
export class BedroomComponent {
  bdrm() {
    alert('welcome to bedroom');
  }
}
