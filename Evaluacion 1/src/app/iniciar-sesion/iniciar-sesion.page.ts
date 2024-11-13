import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AppirestService } from '../home/appirest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private toastController: ToastController,
    private navController: NavController,
    private appirestService: AppirestService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  // Método para mostrar mensajes tipo toast
  async ftoast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'middle',
      color: color,
    });
    await toast.present();
  }

  // Método para manejar el inicio de sesión
  async login() {
    console.log("Intentando iniciar sesión con:", this.email, this.password); // Para depuración
    try {
      const response = await this.appirestService.login(this.email, this.password);
      if (response.success) {
        const rol = response.user.rol;
        console.log("Inicio de sesión exitoso. Redirigiendo al rol:", rol);

        // Redirige según el rol del usuario
        if (rol === 'Profesor') {
          localStorage.setItem('alumnoNombre', response.user.nombre);
          this.router.navigate([`/home-profesor/${response.user.rut}`]);
        } else if (rol === 'Alumno') {
          localStorage.setItem('profesorNombre', response.user.nombre);
          this.router.navigate([`/home-alumno/${response.user.rut}`]);

        } else {
          await this.ftoast('Rol de usuario no válido', 'danger');
        }
      } else {
        // Muestra un mensaje si las credenciales son incorrectas
        await this.ftoast(response.message, 'danger');
      }
    } catch (error) {
      // Manejo de errores en caso de que la solicitud falle
      await this.ftoast('Error en el servidor', 'danger');
      console.error("Error en el servidor:", error);
    }
  }
}
