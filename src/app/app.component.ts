//src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlowerItemComponent } from './flower-item/flower-item.component';
import { CartComponent } from './components/cart/cart.component';
import { FlowerDetailComponent } from './components/flower-detail/flower-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FlowerItemComponent,CartComponent,FlowerDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
