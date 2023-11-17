import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toilet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toilet.component.html',
  styleUrl: './toilet.component.css'
})
export class ToiletComponent {
  tlt(){
    alert('tlt')
  }

}
