import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutComponent } from "./checkout/checkout.component";
import { CartComponent } from "./cart/cart.component";
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-root',
  imports: [CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
