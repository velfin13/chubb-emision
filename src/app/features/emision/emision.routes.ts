import { Routes } from '@angular/router';

export const EMISION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/lista-emisiones/lista-emisiones').then(m => m.ListaEmisionesComponent)
  },
  {
    path: 'crear',
    loadComponent: () => import('./pages/crear-emision/crear-emision').then(m => m.CrearEmisionComponent)
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./pages/crear-emision/crear-emision').then(m => m.CrearEmisionComponent)
  }
];
