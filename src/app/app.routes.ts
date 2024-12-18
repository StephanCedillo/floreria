
//src/app/app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFlowersComponent } from './components/list-flowers/list-flowers.component';
import { FlowerDetailComponent } from './components/flower-detail/flower-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CartComponent } from './components/cart/cart.component';
export const routes: Routes = [
    { path: '', component:InicioComponent },
    { path: 'productos', component: ListFlowersComponent },
    { path: 'flower/:id', component: FlowerDetailComponent },
    { path: 'contactos', component: ContactComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
