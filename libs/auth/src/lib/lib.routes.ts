import { LoginComponent } from './login/login.component';
import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: LoginComponent }
];
