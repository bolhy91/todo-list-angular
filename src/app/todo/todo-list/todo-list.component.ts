import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TodoListStorageService} from '../todo-list-storage.service';
import {LocalstorageService} from '../../shared/seervices/localstorage.service';

declare var $;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  todo: Todo = new Todo();
  constructor(private storageTodo: TodoListStorageService, private localSR: LocalstorageService) {
    this.localSR.changes.subscribe(res => {
      this.todos = res.value;
    });
  }

  ngOnInit() {
    this.todos = this.storageTodo.getTodo();
  }
  // Metodo para agregar una nueva tarea a la lista
  addTodo(item) {
    this.todos =  this.storageTodo.postTodo(item);
  }
  // Metodo para completar una tarea de la lista
  completeTodo(item: Todo) {
    this.storageTodo.completeTodo(item);
  }
  // Metodo para eliminar una tarea de la lista
  removeTodo(item: Todo) {
    this.todos = this.storageTodo.removeTodo(item);
  }
  // Abrir el modal de una tarea seleccionada por el usuario
  modalUpdate(item: Todo) {
    $('.modal').modal();
    this.todo = item;
  }
  // Actualizar el item seleccionado
  updateTodo(item: Todo) {
    this.todos = this.storageTodo.putTodo(this.todo, item);
  }
}
