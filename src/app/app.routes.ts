import { Routes } from '@angular/router';
import { ListaCarreras } from './lista-carreras/lista-carreras';
import { Proyectos } from './proyectos/proyectos';
import { Quienes } from './quienes/quienes';
import { Contacto } from './contacto/contacto';
import { EditarCarrera } from './editar-carrera/editar-carrera';
import { PaginaError } from './pagina-error/pagina-error';

export const routes: Routes = [
  { path: "", component: ListaCarreras },
  { path: "proyectos", component: Proyectos },
  { path: "quienes", component: Quienes },
  { path: "contacto", component: Contacto },
  { path: "editar/:id", component: EditarCarrera },
  { path: "**", component: PaginaError }
];