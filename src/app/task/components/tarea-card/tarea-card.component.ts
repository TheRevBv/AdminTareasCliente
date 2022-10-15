import { Component, Input } from '@angular/core';
import { TaskService } from '@app/task/services/task.service';
import { Tarea } from '@task/models/Tarea';

@Component({
  selector: 'app-tarea-card',
  templateUrl: './tarea-card.component.html',
})
export class TareaCardComponent {

  @Input() tarea!: Tarea;

  constructor(private taskService: TaskService) { }

  cambiarEstatus() {
    this.tarea.estatus = !this.tarea.estatus;
    this.taskService.updateTask(this.tarea).subscribe((res) => {
      console.log("actualizado: ", res);
    });
    console.log(this.tarea.estatus);
  }

  Eliminar() {
    this.taskService.deleteTask(this.tarea.id!).subscribe((res) => {
      console.log('Registro Eliminado', res);
    });
  }
}
