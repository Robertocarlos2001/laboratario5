export class Carrera {
  id?: string;
  nombre: string = "";
  codigo: string = "";
  faculta: string = "";
  duracion: number = 0;

  constructor(nombre: string, codigo: string, faculta: string, duracion: number) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.faculta = faculta;
    this.duracion = duracion;
  }
}