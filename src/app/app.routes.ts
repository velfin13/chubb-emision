import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'dashboard', component: Home },
  { 
    path: 'emision', 
    loadChildren: () => import('./features/emision/emision.routes').then(m => m.EMISION_ROUTES)
  },
  { path: 'polizas', component: Home }, // Temporal
  { path: 'clientes', component: Home }, // Temporal
  { path: 'reportes', component: Home }, // Temporal
  { path: 'configuracion', component: Home }, // Temporal
];
