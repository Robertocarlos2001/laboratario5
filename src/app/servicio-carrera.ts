import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServicioCarrera {
  muestra_mensaje(mensaje: string) {
    alert(mensaje);
  }
}
