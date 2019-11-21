import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';


const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'detail',
    component: TodoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRouting { }
