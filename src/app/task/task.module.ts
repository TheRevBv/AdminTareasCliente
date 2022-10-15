import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MaterialModule } from '@app/material/material.module';
import { TaskRoutingModule } from './task-routing.module';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from '@task/pages/agregar/agregar.component';
import { HomeComponent } from "@task/pages/home/home.component";
import { TaskComponent } from '@task/pages/task/task.component';
import { ListadoComponent } from '@task/pages/listado/listado.component';
import { ListasComponent } from './pages/listas/listas.component';
import { TareaCardComponent } from './components/tarea-card/tarea-card.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AgregarComponent,
    HomeComponent,
    ListadoComponent,
    TaskComponent,
    ListasComponent,
    TareaCardComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
