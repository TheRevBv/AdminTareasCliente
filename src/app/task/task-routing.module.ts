import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from '@task/pages/agregar/agregar.component';
import { AgregarListaComponent } from '@task/pages/agregar-lista/agregar-lista.component';
import { HomeComponent } from '@task/pages/home/home.component';
import { ListadoComponent } from '@task/pages/listado/listado.component';
import { TaskComponent } from '@task/pages/task/task.component';
import { ListasComponent } from '@task/pages/listas/listas.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'listas', component: ListasComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'mi-dia', component: TaskComponent },
      { path: 'editar/:id', component: AgregarComponent },
      // { path: ':id', component: TaskComponent },
      { path: '**', redirectTo: 'listado' }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule { }

