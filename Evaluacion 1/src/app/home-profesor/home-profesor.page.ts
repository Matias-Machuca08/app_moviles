import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppirestService } from '../home/appirest.service';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.page.html',
  styleUrls: ['./home-profesor.page.scss'],
})
export class HomeProfesorPage implements OnInit {
  profesorNombre: string = '';
  asignaturas: any[] = [];
  qrText: any = '';
  selectedAsignatura: string | null = null; 

  constructor(
    private route: ActivatedRoute,
    private appirestService: AppirestService
  ) {}

  ngOnInit() {
    const profesorRut = this.route.snapshot.paramMap.get('rut');
    if (profesorRut) {
      this.cargarProfesor(profesorRut);
      this.cargarAsignaturas(profesorRut);
    } else {
      console.error('RUT del profesor no válido');
    }
  }

  async cargarProfesor(rut: string) {
    try {
      const profesor = await this.appirestService.getUsuarioByRut(rut);
      if (profesor) {
        this.profesorNombre = `${profesor.nombre} ${profesor.apellido}`;
      } else {
        console.error('No se encontró el profesor con el RUT proporcionado');
      }
    } catch (error) {
      console.error('Error al obtener los datos del profesor:', error);
    }
  }

  async cargarAsignaturas(rut: string) {
    try {
      const asignaturas = await this.appirestService.getAsignaturasByProfesor(rut);
      console.log('Asignaturas del profesor:', asignaturas); 
      this.asignaturas = asignaturas;
    } catch (error) {
      console.error('Error al obtener las asignaturas del profesor:', error);
    }
  }

  generateQRCode(asignatura: any) {
    this.selectedAsignatura = asignatura.nombre; 
    this.qrText = `${asignatura.nombre}`; 
  }
}
