// Clase que define los valores que tendra mis tareas
export class Todo {
  id: number;
  title: string;
  complete: boolean;
  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
