// src/app/components/navbar/navbar.component.ts
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-navbar',
  imports: [IonButtons, 
  IonContent, 
  IonHeader,
  IonMenu, 
  IonMenuButton,
  IonTitle,
  IonToolbar,
  RouterLink,
  NgFor,
  RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone:true,
})
export class NavbarComponent implements OnInit {
  menuItems = [
    { path: '/', title: 'Inicio' },
    { path: '/productos', title: 'Productos' },
    { path: '/cart', title: 'Carrito' },
    { path: '/contactos', title: 'Contactos' },
  ];

  constructor() { }

  ngOnInit() {}

}