import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from '@task/pages/agregar/agregar.component';
import { HomeComponent } from "@task/pages/home/home.component";
import { ListadoComponent } from '@task/pages/listado/listado.component';
import { TaskComponent } from '@task/pages/task/task.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: 'home', component: HomeComponent },
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: ':id', component: TaskComponent },
      { path: '**', redirectTo: 'home' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule { }

