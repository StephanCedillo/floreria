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
  flowers: IFlower[] = [];
  @Input() flower!: IFlower;
   cartItems: any[] = []; // Arreglo para almacenar los productos del carrito
   // constructor(private flowersService: FlowersService) {

   constructor(private cartService: CartService,private flowersService: FlowersService) {
    this.flowers = this.flowersService.getFlowers();
   }
 
   ngOnInit(): void {
     this.cartItems = this.cartService.getCartItems(); // Obtener los productos del carrito desde el servicio
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
 }


