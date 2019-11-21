import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

// Declaracion de mi modulo routing
import { TodoRouting } from './todo.routing';
// Declaracion de componentes para las tareas
import { TodoListComponent } from './todo-list/todo-list.component';
// Servicios de tareas
import {TodoListStorageService} from './todo-list-storage.service';
import { TodoInputComponent } from './todo-input/todo-input.component';
import {FormsModule} from '@angular/forms';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoItemComponent } from './todo-item/todo-item.component';


@NgModule({
  declarations: [TodoListComponent, TodoInputComponent, TodoUpdateComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodoRouting,
    // Llamado del modulo para peticiones Http
    HttpClientModule,
    FormsModule
  ],
  // Colocamos TodoListStorageService solo para que se carga cuando el modulo TodoModule inicializa, tambien podemos ponerlo como root
  providers: [TodoListStorageService]
})
export class TodoModule { }
