import { inject, Injectable } from '@angular/core';
// 
import { Database, ref, push, update, remove, listVal } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Carrera } from './carrera.model';

@Injectable({ providedIn: 'root' })
export class DataServices {
  private db = inject(Database);                      // 
  private refCarreras = ref(this.db, 'carreras');     // 

  // CREAR individual
  guardar_carrera(carrera: Carrera) {
    return push(this.refCarreras, {                   // 
      nombre: carrera.nombre,
      codigo: carrera.codigo,
      faculta: carrera.faculta,
      duracion: carrera.duracion
    });
  }

  // LEER todas
  cargar_carreras(): Observable<Carrera[]> {
    // 
    return listVal(this.refCarreras, { keyField: 'id' }) as Observable<Carrera[]>;
  }

  // ACTUALIZAR por id
  actualizar_carrera(id: string, carrera: Carrera) {
    const refCarrera = ref(this.db, 'carreras/' + id); // 
    return update(refCarrera, {                        // 
      nombre: carrera.nombre,
      codigo: carrera.codigo,
      faculta: carrera.faculta,
      duracion: carrera.duracion
    });
  }

  // ELIMINAR por id
  eliminar_carrera(id: string) {
    const refCarrera = ref(this.db, 'carreras/' + id); // 
    return remove(refCarrera);                         // 
  }
}