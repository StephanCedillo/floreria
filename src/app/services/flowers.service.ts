// src/app/services/flowers.service.ts
import { Injectable } from '@angular/core';
import { IFlower } from '../Model/iflower';
import { listaFlores } from './flowers.data'; // Lista de flores de ejemplo.

@Injectable({
  providedIn: 'root'
})
export class FlowersService {
  listaFlores: IFlower[] = listaFlores;  // La lista de flores.
  private cart: { [id: number]: number } = {};  // Este es el carrito que almacenará las cantidades.

  constructor() {}

  // Método para obtener todas las flores con la cantidad correspondiente del carrito
  getFlowers(): IFlower[] {
    return this.listaFlores.map(flower => ({
      ...flower,
      quantity: flower.quantity ?? 0  // Si quantity es undefined, la inicializa a 0
    }));
  }

  // Método para obtener una flor por su ID
  getFlowerById(id: number): IFlower {
    const flower = this.listaFlores.find(f => f.id === id);
    if (flower) {
      flower.quantity = this.cart[flower.id] || 0;  // Asignamos la cantidad desde el carrito
      return flower;
    }
    throw new Error('Flor no encontrada');
  }

  // Método para actualizar la cantidad de una flor en el carrito
  updateQuantity(id: number, change: number): void {
    if (!this.cart[id]) {
      this.cart[id] = 0;  // Si no existe en el carrito, inicializamos la cantidad en 0.
    }
    
    const newQuantity = this.cart[id] + change;
    if (newQuantity >= 0) {
      this.cart[id] = newQuantity;  // Actualizamos la cantidad en el carrito
    }
  }

  // Método para obtener la cantidad actual de una flor en el carrito
  getQuantity(id: number): number {
    return this.cart[id] || 0;
  }
}
