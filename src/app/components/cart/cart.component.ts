 // src/app/components/cart/cart.component.ts
 import { Component, Input, OnInit } from '@angular/core';
 import { CartService } from './cart.service'; // Asegúrate de importar el servicio correctamente
 import { CommonModule } from '@angular/common';
 import { FlowersService } from '../../services/flowers.service';
import { IFlower } from '../../Model/iflower';

 @Component({
   selector: 'app-cart',
   templateUrl: './cart.component.html',
   styleUrls: ['./cart.component.css'],
   imports: [
     CommonModule,  // Común para directivas como *ngIf
   ],
 })
 export class CartComponent implements OnInit {
  bubbles: any[] = []; 
  flowerSelected: IFlower = {} as IFlower;
  flowers: IFlower[] = [];
  @Input() flower!: IFlower;
  totalPrice= 0;
   cartItems: any[] = []; // Arreglo para almacenar los productos del carrito
   // constructor(private flowersService: FlowersService) {

   constructor(
    private cartService:CartService,
     private flowersService: FlowersService) {
    this.flowers = this.flowersService.getFlowers();
   
   }
 
   ngOnInit(): void {
    this.generateBubbles();
     this.cartItems = this.cartService.getCartItems(); // Obtener los productos del carrito desde el servicio
    }
    generateBubbles(): void {
      this.bubbles = Array.from({ length: 128 }, () => ({
        size: 2 + Math.random() * 4,   // Tamaño aleatorio entre 2 y 6 rem
        distance: 6 + Math.random() * 4, // Distancia aleatoria entre 6 y 10 rem
        position: -5 + Math.random() * 110, // Posición aleatoria entre -5% y 105%
        time: 2 + Math.random() * 2,   // Tiempo de animación entre 2 y 4 s
        delay: -(2 + Math.random() * 2) // Retraso aleatorio entre -2 y -4 s
      }));
    }
   // Aquí puedes agregar la propiedad cartProduct si deseas usarla en el HTML
   cartProduct: any;
   removeFromCart(productId: number): void {
    this.cartService.removeProductFromCart(productId);
    this.cartItems = this.cartService.getCartItems(); // Actualiza la lista del carrito
  }
   // Método para mostrar los detalles de un producto específico
   viewProductDetails(product: any) {
     this.cartProduct = product; // Asigna el producto seleccionado a la propiedad cartProduct
     console.log('Producto seleccionado:', this.cartProduct);
   }

   getTotalPrice(item: any): number {
    const price = item.price && !isNaN(item.price) ? item.price : 0;
    const quantity = item.quantity && !isNaN(item.quantity) ? item.quantity : 0;
    return price * quantity;
  }
  
 }


