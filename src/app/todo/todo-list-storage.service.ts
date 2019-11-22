import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './todo';
import { TodoData } from './todo-data';
import {LocalstorageService} from '../shared/services/localstorage.service';

const storageName = 'tasks';

@Injectable()
export class TodoListStorageService {

  public todoList: Todo[];
  lastId = 0;
  constructor(private http: HttpClient, private localSR: LocalstorageService) {
    this.todoList = this.localSR.getLocalStorage() || TodoData;
    this.lastId = this.todoList.length;
    this.localSR.start();
  }
  // Metodo que captura todas las tares pendientes de nuestro archivo json
  getAllTodo() {
      return this.http.get<Todo[]>('../../assets/data/todos.json');
  }
  // Captura todos las tareas del localstorage
  getTodo() {
    return [...this.todoList];
  }
  // Agregar una nueva tarea al localstorage
  postTodo(item: Todo) {
    if (!item.id) {
      item.id = ++this.lastId;
    }
    this.todoList.push(item);
    return this.updateLocalStorage();
  }
  // Actualizar una tarea seleccionada
  putTodo(item: Todo, changes) {
   this.updateTodoById(item.id, changes);
   return this.updateLocalStorage();
  }
  // Remover tarea seleccionada
  removeTodo(item: Todo) {
    this.todoList.splice(this.findItemTodo(item), 1);
    return this.updateLocalStorage();
  }
  completeTodo(item: Todo) {
   this.updateTodoById(item.id, { complete: !item.complete});
   return this.updateLocalStorage();
  }
  // Metodo para actualizar el local storage cuando agregamos un nuevo item
  private updateLocalStorage() {
      this.localSR.store(storageName, this.todoList);
      return this.getTodo();
    }
 // Buscar el item seleccionado a traves de la funcion indexOf
  private findItemTodo(item) {
    return this.todoList.indexOf(item);
  }
  // Capturar item por su id
  getTodoById(id: number): Todo {
    return this.todoList
      .filter(todo => todo.id === id)
      .pop();
  }
  // Actualizar informacion de un item a traves de su id
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }
}
