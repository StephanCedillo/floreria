//src/app/flower-item/flower-item.component.ts
import { Component, Input } from '@angular/core';
import { IFlower } from '../Model/iflower';
import { RouterLink } from '@angular/router';
import { FlowersService } from '../services/flowers.service';
import { CartService } from '../components/cart/cart.service';

@Component({
  selector: 'app-flower-item',
  standalone: true, // Declaramos el componente como standalone si es necesario
  imports: [RouterLink],
  templateUrl: './flower-item.component.html',
  styleUrls: ['./flower-item.component.css']
})
export class FlowerItemComponent {
  @Input() flower!: IFlower;
  
  // URL de imagen y número seleccionado predeterminado
  productImage: string = 'assets/images/mi-producto.png';
  selectedNumber: number = 1;

  // Inyección de servicios
  constructor(
    private flowersService: FlowersService,
    private cartService: CartService
  ) {}

  // Agregar la flor al carrito
    // Agregar la flor al carrito
    // Agregar la flor al carrito
    incrementQuantity(): void {
      this.selectedNumber++;
    }
  
    decrementQuantity(): void {
      if (this.selectedNumber > 1) {
        this.selectedNumber--;
      }
    }
  
    addToCart(): void {
      if (!this.flower) return;
  
      this.cartService.addProductToCart({
        image: this.flower.default_image?.medium_url || 'assets/images/default.png',
        number: this.selectedNumber,
        id: this.flower.id,
        name: this.flower.common_name,
        price: this.flower.price
      });
  
      console.log('Agregado al carrito:', this.flower.common_name, 'Cantidad:', this.selectedNumber);
    }
}
