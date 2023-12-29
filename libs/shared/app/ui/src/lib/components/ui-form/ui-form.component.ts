import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  TodoListActions,
} from '@frontend-challenge/shared/app/data-access';

import {
  TaskStatus,
} from '@frontend-challenge/shared/util/api-interfaces';

import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'frontend-challenge-ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss'],
})

export class UIFormComponent {
  description: FormControl = new FormControl<string>('');
  constructor(private store: Store, private toastr: ToastrService,) {}

  create(event: Event): void {
    event.preventDefault();

    if(this.description.value !== '')  {
      this.store.dispatch(
        TodoListActions.createTodoList({
          task: {
            description: this.description.value,
            status: TaskStatus.ToDo,
          },
        })
      );
    } else {
      this.toastr.warning('Calma ai! precisamos que preencha a tarefa!', 'Alerta!', {
        progressBar: true,
      })
    }
    this.description.setValue('');
  }
}
