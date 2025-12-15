import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [MatListModule, MatIconModule, MatExpansionModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems: MenuItem[] = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'description', label: 'Emisión', route: '/emision' },
    { icon: 'policy', label: 'Pólizas', route: '/polizas' },
    { icon: 'people', label: 'Clientes', route: '/clientes' },
    { icon: 'assessment', label: 'Reportes', route: '/reportes' },
    { 
      icon: 'settings', 
      label: 'Configuración',
      children: [
        { icon: 'person', label: 'Usuario', route: '/configuracion/usuario' },
        { icon: 'account_circle', label: 'Perfil', route: '/configuracion/perfil' },
        { icon: 'security', label: 'Seguridad', route: '/configuracion/seguridad' },
        { icon: 'tune', label: 'Preferencias', route: '/configuracion/preferencias' },
      ]
    },
  ];
}
