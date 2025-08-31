import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Output() dispatchClick: EventEmitter<string> = new EventEmitter<string>();

  dispatchEvent() {
    this.dispatchClick.emit('Dispatch from product lib');
  }
}
