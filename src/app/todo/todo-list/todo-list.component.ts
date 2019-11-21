import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TodoListStorageService} from '../todo-list-storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  constructor(private storageTodo: TodoListStorageService) { }

  ngOnInit() {
    this.todos = this.storageTodo.getTodo();
  }
  // Metodo para agregar una nueva tarea a la lista
  addTodo(item) {
    this.todos =  this.storageTodo.postTodo(item);
  }
  completeTodo(item: Todo) {
    this.storageTodo.completeTodo(item);
  }
}
