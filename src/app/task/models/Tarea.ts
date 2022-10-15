export interface Tarea {
  id?: number;
  nombre: string;
  descripcion: string;
  fechaProgramada: Date;
  fechaTermino?: string;
  estatus: boolean;
}
