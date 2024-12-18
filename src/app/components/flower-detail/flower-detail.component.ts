// src/app/components/flower-detail/flower-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlowersService } from '../../services/flowers.service';
import { IFlower } from '../../Model/iflower';
import { CartService } from '../../components/cart/cart.service'; // Importar el servicio del carrito
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flower-detail',
  imports: [CommonModule],
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.css']
})
export class FlowerDetailComponent implements OnInit {
  quantity: number = 0; // Inicializa la cantidad con 1

  flowerSelected: IFlower = {} as IFlower; // Inicialización con un objeto vacío
  private cart: { [id: number]: number } = {}; // Cart object to track quantity per flower

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private flowersService: FlowersService,
    private cartService: CartService // Inyectar el servicio
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      const flower = this.flowersService.getFlowerById(Number(id));

      if (flower) {
        this.flowerSelected = flower;
      } else {
        this.router.navigate(['not-found', id]);
      }
    });
  }

  addToCart(): void {
    if (!this.flowerSelected) return;
  
    this.cartService.addProductToCart({
      image: this.flowerSelected.default_image?.medium_url || 'assets/images/default.png',
      number: this.quantity, // Asegúrate de que esta cantidad dinámica sea mayor que 0
      id: this.flowerSelected.id,
      name: this.flowerSelected.common_name,
    });
  
    console.log('Producto agregado al carrito:', this.flowerSelected, 'Cantidad:', this.quantity);
  }
  

  changeQuantity(change: number): void {
    if (!this.flowerSelected) return;

    const flowerId = this.flowerSelected.id;

    if (!this.cart[flowerId]) {
      this.cart[flowerId] = 0;
    }

    const newQuantity = this.cart[flowerId] + change;

    if (newQuantity >= 0) {
      this.cart[flowerId] = newQuantity;
      this.flowerSelected.quantity = newQuantity;
    }
  }
}

