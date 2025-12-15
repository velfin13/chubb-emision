import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'dashboard', component: Home }, // Temporal
  { path: 'emision', component: Home }, // Temporal
  { path: 'polizas', component: Home }, // Temporal
  { path: 'clientes', component: Home }, // Temporal
  { path: 'reportes', component: Home }, // Temporal
  { path: 'configuracion', component: Home }, // Temporal
];
