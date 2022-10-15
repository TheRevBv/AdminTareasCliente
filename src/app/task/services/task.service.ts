import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';

import { Tarea } from "@app/task/models/Tarea";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  BaseURI: string = environment.baseURI;
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.BaseURI}/Tareas`);
  }

  getTask(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.BaseURI}/Tareas/${id}`);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.BaseURI}/Tareas/${id}`);
  }

  createTask(task: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(`${this.BaseURI}/Tareas`, task);
  }

  updateTask(task: Tarea) {
    return this.http.put(`${this.BaseURI}/Tareas/${task.id}`, task);
  }

}
