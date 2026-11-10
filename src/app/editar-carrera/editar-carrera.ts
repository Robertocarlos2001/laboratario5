import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrerasService } from '../carreras.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Carrera } from '../carrera.model';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-editar-carrera',
  styleUrl: './editar-carrera.css',
  templateUrl: './editar-carrera.html',
})
export class EditarCarrera implements OnInit {
  cuadroNombre: string = "";
  cuadroCodigo: string = "";
  cuadroFaculta: string = "";
  cuadroDuracion: number = 0;
  id: string = "";
  accion: number = 0;
  textoAccion: string = "";

  constructor(
    private router: Router,
    private carrerasService: CarrerasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    let carrera = this.carrerasService.encontrar_carrera(this.id);
    if (carrera) {
      this.cuadroNombre = carrera.nombre;
      this.cuadroCodigo = carrera.codigo;
      this.cuadroFaculta = carrera.faculta;
      this.cuadroDuracion = carrera.duracion;
    }
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.textoAccion = (this.accion == 1) ? "Actualizar carrera" : "Eliminar carrera";
  }

  volverHome() {
    this.router.navigate(['']);
  }

  actualizar_carrera() {
    let mi_carrera = new Carrera(
      this.cuadroNombre, this.cuadroCodigo, this.cuadroFaculta, this.cuadroDuracion
    );
    this.carrerasService.actualizar_carrera(this.id, mi_carrera);
    setTimeout(() => this.volverHome(), 150);
  }

  eliminar_carrera() {
    this.carrerasService.eliminar_carrera(this.id);
    setTimeout(() => this.volverHome(), 150);
  }

  accion_carrera() {
    if (this.accion == 1) {
      this.actualizar_carrera();
    } else {
      this.eliminar_carrera();
    }
  }
}