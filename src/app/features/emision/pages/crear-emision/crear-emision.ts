import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-crear-emision',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false, showError: true }
    }
  ],
  templateUrl: './crear-emision.html',
  styleUrl: './crear-emision.scss'
})
export class CrearEmisionComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Formularios por paso
  datosAseguradoForm!: FormGroup;
  datosPolizaForm!: FormGroup;
  coberturaForm!: FormGroup;
  beneficiariosForm!: FormGroup;

  tiposDocumento = [
    { value: 'dni', label: 'DNI' },
    { value: 'pasaporte', label: 'Pasaporte' },
    { value: 'ce', label: 'Carnet de Extranjería' }
  ];

  tiposPoliza = [
    { value: 'vida', label: 'Seguro de Vida' },
    { value: 'salud', label: 'Seguro de Salud' },
    { value: 'auto', label: 'Seguro de Auto' },
    { value: 'hogar', label: 'Seguro de Hogar' }
  ];

  coberturas = [
    { value: 'basica', label: 'Cobertura Básica', precio: 50 },
    { value: 'intermedia', label: 'Cobertura Intermedia', precio: 100 },
    { value: 'premium', label: 'Cobertura Premium', precio: 200 }
  ];

  ngOnInit() {
    this.initForms();
  }

  initForms() {
    // Paso 1: Datos del Asegurado (campos requeridos)
    this.datosAseguradoForm = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.minLength(8)]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      direccion: [''], // No requerido
      ciudad: [''], // No requerido
      codigoPostal: [''] // No requerido
    });

    // Paso 2: Datos de la Póliza (campos requeridos)
    this.datosPolizaForm = this.fb.group({
      tipoPoliza: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      duracion: [12, [Validators.required, Validators.min(1)]],
      montoAsegurado: ['', [Validators.required, Validators.min(1000)]],
      observaciones: [''] // No requerido
    });

    // Paso 3: Cobertura (campos requeridos)
    this.coberturaForm = this.fb.group({
      cobertura: ['', Validators.required],
      coberturaAdicional: [false],
      asistenciaVial: [false],
      proteccionJuridica: [false]
    });

    // Paso 4: Beneficiarios (opcional, puede estar vacío)
    this.beneficiariosForm = this.fb.group({
      nombreBeneficiario1: [''],
      parentescoBeneficiario1: [''],
      porcentajeBeneficiario1: [100],
      nombreBeneficiario2: [''],
      parentescoBeneficiario2: [''],
      porcentajeBeneficiario2: [0]
    });
  }

  onSubmit() {
    // Validar solo los formularios con campos requeridos
    if (this.datosAseguradoForm.invalid || 
        this.datosPolizaForm.invalid || 
        this.coberturaForm.invalid) {
      
      // Marcar todos los campos como touched para mostrar errores
      Object.values(this.datosAseguradoForm.controls).forEach(control => {
        control.markAsTouched();
      });
      Object.values(this.datosPolizaForm.controls).forEach(control => {
        control.markAsTouched();
      });
      Object.values(this.coberturaForm.controls).forEach(control => {
        control.markAsTouched();
      });
      
      alert('Por favor complete todos los campos requeridos');
      return;
    }

    // Consolidar datos
    const emisionData = {
      asegurado: this.datosAseguradoForm.value,
      poliza: this.datosPolizaForm.value,
      cobertura: this.coberturaForm.value,
      beneficiarios: this.beneficiariosForm.value,
      fechaEmision: new Date()
    };

    console.log('Emisión creada:', emisionData);
    alert('Emisión creada exitosamente');
    this.router.navigate(['/emision']);
  }

  onCancel() {
    this.router.navigate(['/emision']);
  }

  calcularPrimaTotal(): number {
    const coberturaSeleccionada = this.coberturaForm.get('cobertura')?.value;
    const cobertura = this.coberturas.find(c => c.value === coberturaSeleccionada);
    let total = cobertura?.precio || 0;

    if (this.coberturaForm.get('coberturaAdicional')?.value) total += 30;
    if (this.coberturaForm.get('asistenciaVial')?.value) total += 20;
    if (this.coberturaForm.get('proteccionJuridica')?.value) total += 15;

    return total;
  }
}
