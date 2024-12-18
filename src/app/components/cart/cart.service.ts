// src/app/components/cart/cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { image: string; number: number; id: number; name: string }[] = [];
  private cartItems: any[] = [];
  addProductToCart(product: { image: string; number: number; id: number; name: string }): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.number += product.number;
    } else {
      this.cartItems.push(product);
    }

    console.log('Producto agregado o actualizado:', this.cart); // Verificación en consola
  }

  getCartItems(): any[] {
    return this.cartItems;
    return this.cart; // Retornar los productos del carrito
  }
  removeProductFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }
}


