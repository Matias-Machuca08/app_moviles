import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppirestService } from '../home/appirest.service';
import { Router } from '@angular/router';
AppirestService

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
  alumnoNombre: string = '';
  alumnoRut: string | null = null;  // Se asegura que sea null inicialmente
  asignaturas: any[] = [];
  contenidoQR: string = '';

  constructor(
    private route: ActivatedRoute,
    private appirestService: AppirestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.alumnoRut = this.route.snapshot.paramMap.get('rut');
    console.log('Alumno ID:', this.alumnoRut);

    if (this.alumnoRut) {
      this.cargarAlumno(this.alumnoRut);
      this.cargarAsignaturas(this.alumnoRut);
    } else {
      console.error('El RUT del alumno no se ha encontrado.');
    }
  }

  cargarAlumno(alumnoRut: string | null) {
    if (!alumnoRut) {
      console.error('ID del alumno no válido');
      return;
    }

    this.appirestService.getUsuarioByRut(alumnoRut).then(alumno => {
      console.log('Alumno cargado:', alumno); // Agrega este log
      if (alumno) {
        this.alumnoNombre = `${alumno.nombre} ${alumno.apellido}`;
      } else {
        console.error('No se encontró el alumno con el ID:', alumnoRut);
      }
    }).catch(error => {
      console.error('Error al obtener los datos del alumno:', error);
    });
  }

  cargarAsignaturas(alumnoRut: string | null) {
    if (!alumnoRut) {
      console.error('Rut del alumno no válido para cargar asignaturas');
      return;
    }
    // Llamamos al servicio para obtener las asignaturas filtradas del alumno
    this.appirestService.getAsignaturasByAlumno(alumnoRut).then(asignaturas => {
      console.log('Asignaturas del alumno:', asignaturas);
      this.asignaturas = asignaturas;
    }).catch(error => {
      console.error('Error al obtener las asignaturas del alumno:', error);
    });
  }

  registrarAsistencia() {
    if (this.contenidoQR) {
      console.log(`Registrando asistencia para el QR: ${this.contenidoQR}`);
      // Lógica para registrar la asistencia
    } else {
      console.error("No se ha leído ningún código QR");
    }
  }

  CerrarSesion() {
    // Lógica para cerrar sesión, como eliminar token o redirigir a login
    console.log('Cerrar sesión');
    this.router.navigate(['/iniciar-sesion']);
  }
}
