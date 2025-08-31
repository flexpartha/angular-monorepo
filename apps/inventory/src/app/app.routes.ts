import { LoginComponent } from '@angular-monorepo/login';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@angular-monorepo/products').then((m) => m.ProductsComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('@angular-monorepo/orders').then((m) => m.OrdersComponent),
  },
];
