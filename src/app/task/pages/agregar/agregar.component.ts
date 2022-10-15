import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TaskService } from '@app/task/services/task.service';

import { Tarea } from "@task/models/Tarea";

import { ToastComponent } from '@app/task/components/toast/toast.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  tarea: Tarea = {
    estatus: false,
    nombre: '',
    descripcion: '',
    fechaProgramada: new Date(),
  };
  durationInSeconds = 5;
  constructor(private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(({ id }) => this.taskService.getTask(id)))
      .subscribe((res) => {
        this.tarea = res;
      });
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-') +
      'T' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }
  openSnackBar() {
    this._snackBar.openFromComponent(ToastComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  // Funcion para editar o agregar una tarea
  Guardar() {
    if (this.tarea.nombre.trim().length === 0) {
      return;
    }
    if (this.tarea.id && this.tarea.estatus === true && this.tarea.fechaProgramada) {
      this.tarea.fechaTermino = this.formatDate(new Date());
      this.taskService.updateTask(this.tarea).subscribe((res) => {
        this.openSnackBar();
        console.log('Respuesta: ', res);
        this._router.navigate(['tareas']);
      });
    } else if (this.tarea.id) {
      this.taskService.updateTask(this.tarea).subscribe((res) => {
        this.openSnackBar();
        console.log('Respuesta: ', res);
        this._router.navigate(['tareas']);
      });
    } else {
      this.taskService.createTask(this.tarea).subscribe((res) => {
        this.openSnackBar();
        console.log('Respuesta: ', res);
        this._router.navigate(['tareas']);
      });
    }
  }
  // Funcion para eliminar una tarea
  Eliminar() {
    this.taskService.deleteTask(this.tarea.id!).subscribe((res) => {
      console.log('Respuesta: ', res);
    });
  }
}
