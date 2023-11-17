import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diningroom',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './diningroom.component.html',
  styleUrl: './diningroom.component.css'
})
export class DiningroomComponent {
dngrm(){
  alert('Welcome to dining room')
}
}
