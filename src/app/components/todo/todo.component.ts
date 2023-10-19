import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  nameInput: string = '';
  numberInput: string = '';
  mailInput: string = '';
  idRef: number = Math.floor(Math.random() * 100);
  editId = 0;
  btnText = 'add';

  todoArray: Todo[] = [
    { id: 1, name: 'Yokesh', phone: '8723727393', mail: 'yokesh@gmail.com' },
    { id: 2, name: 'Akshaya', phone: '9139294927', mail: 'akshaya@gmail.com' },
  ];

  add(): Todo[] {
    if ((this.editId === 0)) {
      let todo: Todo = {
        id: this.idRef,
        name: this.nameInput,
        phone: this.numberInput,
        mail: this.mailInput,
      };
      this.todoArray.push(todo);
    } else {
      this.todoArray = this.todoArray.map((number) => {
        if (number.id === this.editId) {
          return {
            ...number,
            name: this.nameInput,
            phone: this.numberInput,
            mail: this.mailInput,
          };
        } else {
          return number;
        }
      });
    }
    this.nameInput = '';
    this.numberInput = '';
    this.mailInput = ''
    this.btnText = 'add'
    return this.todoArray;
  }

  delete(id: number): Todo[] {
    let newArray = [];
    for (let todo of this.todoArray) {
      if (todo.id !== id) {
        newArray.push(todo);
      }
    }
    this.todoArray = newArray;
    return this.todoArray;
  }

  edit(id: number): Todo[] {
    for (let todo of this.todoArray) {
      if (todo.id === id) {
        (this.editId = id), (this.nameInput = todo.name);
        this.mailInput = todo.mail;
        this.numberInput = todo.phone;
        this.btnText = 'update';
      }
    }
    return this.todoArray;
  }
}
