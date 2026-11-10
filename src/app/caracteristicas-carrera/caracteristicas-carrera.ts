import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-caracteristicas-carrera',
  styleUrl: './caracteristicas-carrera.css',
  templateUrl: './caracteristicas-carrera.html',
})
export class CaracteristicasCarrera {
  @Output() caracteristicasCarreras = new EventEmitter<string>();

  agregar_caracteristica(value: string) {
    this.caracteristicasCarreras.emit(value);
  }
}