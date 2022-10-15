import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroPageComponent } from '@shared/erro-page/erro-page.component';

const routes: Routes = [
  {
    path: 'tareas',
    loadChildren: () => import('@task/task.module').then(m => m.TaskModule)
  },
  {
    path: '404',
    component: ErroPageComponent
  },
  {
    path: '**',
    component: ErroPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
