import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppirestService {
  private urlBase = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  // Método para obtener todos los usuarios
  async getUsuarios() {
    const ruta = `${this.urlBase}usuarios`;
    try {
      const usuarios = await firstValueFrom(this.httpClient.get<any[]>(ruta));
      console.log('Usuarios obtenidos de la API:', usuarios); // Log para depuración
      return usuarios;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      return [];
    }
  }

  // Método para verificar las credenciales de inicio de sesión
  async login(email: string, password: string): Promise<any> {
    const usuarios = await this.getUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
      return { success: true, user: usuario };
    }
    return { success: false, message: 'Credenciales incorrectas' };
  }

  // Método para obtener un usuario por su RUT
  async getUsuarioByRut(rut: string | null): Promise<any> {
    if (!rut) {
      console.error('RUT no proporcionado');
      return undefined;  // Retorna undefined si no hay RUT
    }
  
    try {
      const usuarios = await this.getUsuarios();
      if (!usuarios || usuarios.length === 0) {
        console.error('No se encontraron usuarios');
        return undefined;  // Retorna undefined si no hay usuarios
      }
      const usuario = usuarios.find(u => u.rut === rut);
      if (!usuario) {
        console.error(`No se encontró un usuario con el RUT: ${rut}`);
        return undefined;  // Retorna undefined si no se encuentra el usuario
      }
  
      return usuario;
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      return undefined;  // Maneja cualquier error en la llamada al servicio
    }
  }

  // Método para obtener asignaturas de un profesor por su RUT
  async getAsignaturasByProfesor(rut: string | null): Promise<any[]> {
    if (!rut) {
      console.error('RUT del profesor no proporcionado');
      return [];
    }
    try {
      // Obtener el usuario usando su RUT
      const usuario = await this.getUsuarioByRut(rut);
      
      if (!usuario) {
        console.error('No se encontró el usuario con el RUT:', rut);
        return [];
      }
  
      // Obtener las asignaturas asociadas al usuario a través de sus asignaturasId
      const asignaturasId = usuario.asignaturasId;
  
      // Obtener todas las asignaturas disponibles
      const todasLasAsignaturas = await firstValueFrom(this.httpClient.get<any[]>(`${this.urlBase}asignaturas`));
  
      // Filtrar las asignaturas que coinciden con los IDs del usuario
      const asignaturasFiltradas = todasLasAsignaturas.filter(asignatura => asignaturasId.includes(asignatura.id));
  
      console.log('Asignaturas del profesor filtradas:', asignaturasFiltradas);
      return asignaturasFiltradas;
    } catch (error) {
      console.error('Error al obtener las asignaturas del profesor:', error);
      return [];
    }
  }

  // Método para obtener asignaturas de un alumno por su RUT
  async getAsignaturasByAlumno(rut: string | null): Promise<any[]> {
    if (!rut) {
      console.error('RUT del alumno no proporcionado');
      return [];
    }
    try {
      // Obtener el usuario usando su RUT
      const usuario = await this.getUsuarioByRut(rut);
      
      if (!usuario) {
        console.error('No se encontró el usuario con el RUT:', rut);
        return [];
      }
  
      // Obtener las asignaturas asociadas al usuario a través de sus asignaturasId
      const asignaturasId = usuario.asignaturasId;
  
      // Obtener todas las asignaturas disponibles
      const todasLasAsignaturas = await firstValueFrom(this.httpClient.get<any[]>(`${this.urlBase}asignaturas`));
  
      // Filtrar las asignaturas que coinciden con los IDs del usuario
      const asignaturasFiltradas = todasLasAsignaturas.filter(asignatura => asignaturasId.includes(asignatura.id));
  
      console.log('Asignaturas del alumno filtradas:', asignaturasFiltradas);
      return asignaturasFiltradas;
    } catch (error) {
      console.error('Error al obtener las asignaturas del alumno:', error);
      return [];
    }
  }
  // Método para obtener asistencias de un alumno por su RUT
async getAsistenciasByAlumno(rut: string | null): Promise<any[]> {
  if (!rut) {
    console.error('RUT del alumno no proporcionado');
    return [];
  }

  try {
    const ruta = `${this.urlBase}asistencias?alumnoRut=${rut}`;
    const asistencias = await firstValueFrom(this.httpClient.get<any[]>(ruta));
    return asistencias;
  } catch (error) {
    console.error('Error al obtener las asistencias del alumno:', error);
    return [];
  }
}


}
