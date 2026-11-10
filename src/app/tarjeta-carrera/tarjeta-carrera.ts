import { Component, Input } from '@angular/core';
import { Carrera } from '../carrera.model';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'tr[app-tarjeta-carrera]',
  styleUrl: './tarjeta-carrera.css',
  templateUrl: './tarjeta-carrera.html',
})
export class TarjetaCarrera {
  @Input() carreraLista!: Carrera;
}