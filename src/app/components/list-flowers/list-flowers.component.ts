//src/app/components/list-flowers/list-flowers.component.ts
import { Component, inject } from '@angular/core';
import { IFlower } from '../../Model/iflower';
import { FlowersService } from '../../services/flowers.service';
import { FlowerItemComponent } from '../../flower-item/flower-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-flowers',
  imports: [FlowerItemComponent, CommonModule],
  templateUrl: './list-flowers.component.html',
  styleUrl: './list-flowers.component.css'
})
export class ListFlowersComponent {
  flowers: IFlower[] = [];
  
  constructor(private flowersService: FlowersService) {
    this.flowers = this.flowersService.getFlowers();
  }
}
