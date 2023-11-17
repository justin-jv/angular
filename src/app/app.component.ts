import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BedroomComponent } from './bedroom/bedroom.component';
import { DiningroomComponent } from './diningroom/diningroom.component';
import { HallComponent } from './hall/hall.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ToiletComponent } from './toilet/toilet.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BedroomComponent, DiningroomComponent,HallComponent,KitchenComponent, ToiletComponent, FormsModule, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';
  jaya() {
    alert('Clicked');
  }
  username="Justin";
}

