// Clase que define los valores que tendra mis tareas
export class Todo {
  id?: string;
  title: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
