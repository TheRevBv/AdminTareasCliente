import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { TaskComponent } from './pages/task/task.component';
import { HomeComponent } from './pages/home/home.component';
import { MydayComponent } from './pages/myday/myday.component';



@NgModule({
  declarations: [
    AgregarComponent,
    TaskComponent,
    HomeComponent,
    MydayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
