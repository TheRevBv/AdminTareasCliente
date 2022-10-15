import { Component, OnInit } from '@angular/core';
import { Tarea } from '@task/models/Tarea';
import { TaskService } from '@app/task/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  tareas: Tarea[] = [];
  hoy = new Date();
  constructor(private tareaService: TaskService) { }

  ngOnInit(): void {
    this.tareaService.getTasks().subscribe((tasks) => {
      tasks.map((tarea) => {
        if (tarea.fechaProgramada.toLocaleString().substring(8, 10) === this.hoy.toLocaleString().substring(0, 2)) { this.tareas.push(tarea) } else { console.log('No es hoy') };
      });
    });
  }

}
