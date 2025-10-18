import { LoginComponent } from '@angular-monorepo/login';
//import { OrdersComponent } from '@angular-monorepo/orders';
//import { ProductsComponent } from '@angular-monorepo/products';
import { ContainerpoolComponent } from '@angular-monorepo/containerpool';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [RouterModule, ContainerpoolComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'inventory';

  accesdispatch(data: string) {
    alert(data);
  }

  loginForm(data: any) {
    console.log(data.username);
  }
}
