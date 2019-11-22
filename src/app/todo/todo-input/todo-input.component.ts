import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styles: [`
   .size-22{ font-size: 22px; }
  `]
})
export class TodoInputComponent implements OnInit {

  // Creo mi variables que me ayudaran a emitir el string de mi campo Input para la nueva tarea
  @Output() submit: EventEmitter<object> = new EventEmitter();
  newTodo = new Todo();
  constructor() { }

  ngOnInit() {
  }
  eventTitle() {
    this.submit.emit(this.newTodo);
    this.newTodo = new Todo();
  }
}
