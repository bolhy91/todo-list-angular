import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';
import {TodoListStorageService} from '../todo-list-storage.service';

declare var $;

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html'
})
export class TodoUpdateComponent implements OnInit {
  @Input() itemTodo: Todo = new Todo({ title: 'efef', complete: false});
  @Output() updateTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() {
  }

  ngOnInit() {
  }
  changeTodo() {
    this.updateTodo.emit(this.itemTodo);
  }
}
