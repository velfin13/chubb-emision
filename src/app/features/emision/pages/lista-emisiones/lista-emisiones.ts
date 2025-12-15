import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

interface Emision {
  id: number;
  numeroPoliza: string;
  asegurado: string;
  tipoPoliza: string;
  estado: 'activa' | 'pendiente' | 'cancelada';
  fechaEmision: Date;
  prima: number;
}

@Component({
  selector: 'app-lista-emisiones',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule
  ],
  templateUrl: './lista-emisiones.html',
  styleUrl: './lista-emisiones.scss'
})
export class ListaEmisionesComponent {
  displayedColumns: string[] = ['numeroPoliza', 'asegurado', 'tipoPoliza', 'fechaEmision', 'prima', 'estado', 'acciones'];
  
  emisiones: Emision[] = [
    {
      id: 1,
      numeroPoliza: 'POL-2024-001',
      asegurado: 'Juan Pérez García',
      tipoPoliza: 'Seguro de Vida',
      estado: 'activa',
      fechaEmision: new Date('2024-01-15'),
      prima: 150
    },
    {
      id: 2,
      numeroPoliza: 'POL-2024-002',
      asegurado: 'María González López',
      tipoPoliza: 'Seguro de Salud',
      estado: 'activa',
      fechaEmision: new Date('2024-02-20'),
      prima: 200
    },
    {
      id: 3,
      numeroPoliza: 'POL-2024-003',
      asegurado: 'Carlos Rodríguez Martín',
      tipoPoliza: 'Seguro de Auto',
      estado: 'pendiente',
      fechaEmision: new Date('2024-03-10'),
      prima: 120
    }
  ];

  constructor(private router: Router) {}

  crearNuevaEmision() {
    this.router.navigate(['/emision/crear']);
  }

  editarEmision(id: number) {
    this.router.navigate(['/emision/editar', id]);
  }

  verDetalles(id: number) {
    console.log('Ver detalles de emisión:', id);
  }

  getEstadoClass(estado: string): string {
    const classes: any = {
      'activa': 'estado-activa',
      'pendiente': 'estado-pendiente',
      'cancelada': 'estado-cancelada'
    };
    return classes[estado] || '';
  }

  getEstadoLabel(estado: string): string {
    const labels: any = {
      'activa': 'Activa',
      'pendiente': 'Pendiente',
      'cancelada': 'Cancelada'
    };
    return labels[estado] || estado;
  }
}
