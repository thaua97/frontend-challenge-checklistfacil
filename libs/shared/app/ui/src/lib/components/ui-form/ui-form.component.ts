import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  TodoListActions,
} from '@frontend-challenge/shared/app/data-access';

import {
  TaskStatus,
} from '@frontend-challenge/shared/util/api-interfaces';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'frontend-challenge-ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss'],
})

export class UIFormComponent {
  description: FormControl = new FormControl<string>('');

  constructor(private store: Store) {}

  async create() {
    await this.store.dispatch(
      TodoListActions.createTodoList({
        task: {
          description: this.description.value,
          status: TaskStatus.ToDo,
        },
      })
    );
   this.description.setValue('');
  }
}
