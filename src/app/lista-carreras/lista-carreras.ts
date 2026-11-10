import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Carrera } from '../carrera.model';
import { ServicioCarrera } from '../servicio-carrera';
import { CarrerasService } from '../carreras.service';
import { TarjetaCarrera } from '../tarjeta-carrera/tarjeta-carrera';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule, TarjetaCarrera],
  selector: 'app-lista-carreras',
  styleUrl: './lista-carreras.css',
  templateUrl: './lista-carreras.html',
})
export class ListaCarreras implements OnInit {
  titulo = "Listado de carreras";
  cuadroNombre: string = "";
  cuadroCodigo: string = "";
  cuadroFaculta: string = "";
  cuadroDuracion: number = 0;
  carreras: Carrera[] = [];

  constructor(
    private miServicio: ServicioCarrera,
    private carreraService: CarrerasService,
    private DetectorDeCambios: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.carreraService.obtener_carreras().subscribe(
      misCarreras => {
        this.carreras = misCarreras ?? [];
        this.carreraService.set_carreras(this.carreras);
        this.DetectorDeCambios.markForCheck();
      }
    );
  }

  agregar_carrera() {
  
  if (
    this.cuadroNombre.trim() === "" ||
    this.cuadroCodigo.trim() === "" ||
    this.cuadroFaculta.trim() === "" ||
    !this.cuadroDuracion || this.cuadroDuracion <= 0
  ) {
    this.miServicio.muestra_mensaje("completa todos los campos");
    return;  
  }

  let mi_carrera = new Carrera(
    this.cuadroNombre,
    this.cuadroCodigo,
    this.cuadroFaculta,
    this.cuadroDuracion
  );
  this.carreraService.agregar_carrera_servicio(mi_carrera);
  this.cuadroNombre = "";
  this.cuadroCodigo = "";
  this.cuadroFaculta = "";
  this.cuadroDuracion = 0;
}
}