import { Component, OnInit } from '@angular/core';
import { AppirestService } from '../home/appirest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas: any[] = [];

  constructor(
    private appirestService: AppirestService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const alumnoRut = this.route.snapshot.paramMap.get('rut');
    if (alumnoRut) {
      await this.cargarAsignaturas(alumnoRut);
    } else {
      console.error('RUT del alumno no válido');
    }
  }

  async cargarAsignaturas(rut: string) {
    try {
      this.asignaturas = await this.appirestService.getAsignaturasByAlumno(rut);
      console.log('Asignaturas del alumno:', this.asignaturas);
    } catch (error) {
      console.error('Error al obtener asignaturas:', error);
    }
  }
}
