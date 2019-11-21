import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  // Prueba para saber si nuestro constructor en el modelo esta aceptando los valores
  // tslint:disable-next-line:only-arrow-functions
  it('should accept values in the constructor', () => {
    const todo = new Todo({
      title: 'Comprar manzanas',
      complete: true
    });
    expect(todo.title).toEqual('Comprar manzanas');
    expect(todo.complete).toEqual(true);
  });

});
