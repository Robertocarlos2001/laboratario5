import { Injectable } from '@angular/core';
import { Carrera } from './carrera.model';
import { ServicioCarrera } from './servicio-carrera';
import { DataServices } from './data.services';

@Injectable({ providedIn: 'root' })
export class CarrerasService {
  carreras: Carrera[] = [];

  constructor(
    private servicioMensaje: ServicioCarrera,
    private dataService: DataServices
  ) {}

  agregar_carrera_servicio(carrera: Carrera) {
    this.servicioMensaje.muestra_mensaje("Carrera agregada: " + carrera.nombre);
    this.dataService.guardar_carrera(carrera);
  }

  encontrar_carrera(id: string) {
    return this.carreras.find((c) => c.id === id);
  }

  actualizar_carrera(id: string, carrera: Carrera) {
    this.dataService.actualizar_carrera(id, carrera);
  }

  eliminar_carrera(id: string) {
    this.dataService.eliminar_carrera(id);
  }

  obtener_carreras() {
    return this.dataService.cargar_carreras();
  }

  set_carreras(misCarreras: Carrera[]) {
    this.carreras = misCarreras;
  }
}
