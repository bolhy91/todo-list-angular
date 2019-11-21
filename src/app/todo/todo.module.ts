import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

// Declaracion de mi modulo routing
import { TodoRouting } from './todo.routing';
// Declaracion de componentes para las tareas
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
// Servicios de tareas
import {TodoListStorageService} from './todo-list-storage.service';
import { TodoInputComponent } from './todo-input/todo-input.component';


@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent, TodoInputComponent],
  imports: [
    CommonModule,
    TodoRouting,
    // Llamado del modulo para peticiones Http
    HttpClientModule
  ],
  // Colocamos TodoListStorageService solo para que se carga cuando el modulo TodoModule inicializa, tambien podemos ponerlo como root
  providers: [TodoListStorageService]
})
export class TodoModule { }
