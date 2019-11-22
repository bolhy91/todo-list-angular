import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [`
      .todo-complete {
          text-decoration: line-through;
      }
  `]
})
export class TodoItemComponent implements OnInit {

  @Input() item: Todo;
  @Output() removeItem: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() completeItem: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() modalItem: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit() {
  }

  removeTodo() {
    this.removeItem.emit(this.item);
  }

  completeTodo() {
    this.completeItem.emit(this.item);
  }
  modalTodo(){
    this.modalItem.emit(this.item);
  }
}
