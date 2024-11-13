import { Component, OnInit } from '@angular/core';
import { AppirestService } from '../home/appirest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  asistencias: any[] = [];

  constructor(
    private appirestService: AppirestService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const alumnoRut = this.route.snapshot.paramMap.get('rut');
    if (alumnoRut) {
      this.cargarAsistencias(alumnoRut);
    } else {
      console.error('RUT del alumno no válido');
    }
  }

  async cargarAsistencias(rut: string) {
    try {
      this.asistencias = await this.appirestService.getAsistenciasByAlumno(rut);
      console.log('Asistencias del alumno:', this.asistencias);
    } catch (error) {
      console.error('Error al obtener asistencias:', error);
    }
  }
}
