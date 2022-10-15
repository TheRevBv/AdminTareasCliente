import { Component, OnInit } from '@angular/core';
import { TaskService } from '@app/task/services/task.service';
import { Tarea } from '@app/task/models/Tarea';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  showModal = false;
  tareas: Tarea[] = [];

  mostrarModal(event: boolean) {
    this.showModal = event;
    console.log(event);
  }
  constructor(private tareaService: TaskService) { }
  // toggleModal() {
  //   this.showModal = !this.showModal;
  // }
  ngOnInit(): void {
    this.tareaService.getTasks().subscribe((tasks) => this.tareas = tasks);
  }

}
