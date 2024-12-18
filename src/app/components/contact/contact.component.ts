//src/app/components/contact/contact.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private router: Router) {}
  navegar(path: string) {
    this.router.navigate([path]);
  }
}
