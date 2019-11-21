import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoModule} from './todo/todo.module';


const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => TodoModule
  },
  {
    path: '**',
    redirectTo: '/todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
