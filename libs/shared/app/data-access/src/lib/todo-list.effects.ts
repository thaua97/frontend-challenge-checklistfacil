import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import * as TodoListActions from './todo-list.actions';
import { TodoListService } from './todo-list.service';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class TodoListEffects {
  constructor(
    private actions$: Actions,
    private service: TodoListService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {}

  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.loadTodoList),
      tap(() => this.spinner.show()),
      exhaustMap(() =>
        this.service.list().pipe(
          map((tasks) =>TodoListActions.loadTodoListSuccess({ tasks })),
          catchError((error) => {
            this.toastr.error('Ops! algo deu errado no carregamento', 'Erro', {
              progressBar: true,
            })
            return of(TodoListActions.loadTodoListError(error))
          }),
          tap(() => setTimeout(() => {this.spinner.hide();}, 2000)),
        )
      )
    );
  });

  createTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.createTodoList),
      exhaustMap(({ task }) =>
        this.service.create(task).pipe(
          tap((task) => this.toastr.success(`A tarefa ${task?.description} foi adicionada com sucesso!`, 'Vamos la!', {
            progressBar: true,
          })),
          map((task) => TodoListActions.createTodoListSuccess({ task })),
          catchError((error) => {
            this.toastr.error('Ops! algo deu errado ao criar a tarefa', 'Erro', {
              progressBar: true,
            })
            return of(TodoListActions.createTodoListError(error))
          })
        )
      )
    );
  });

  removerTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.removeTodoList),
      exhaustMap(({ taskId }) =>
        this.service.remove(taskId).pipe(
          tap(() => this.toastr.success(`A tarefa foi deletada com sucesso`, 'Tarefa Deletada', {
            progressBar: true,
          })),
          map(() => TodoListActions.removeTodoListSuccess({ taskId })),
          catchError((error) => {
            this.toastr.error('Ops! algo deu errado', 'Erro', {
              progressBar: true,
            })
            return of(TodoListActions.removeTodoListError(error))
          })
        )
      )
    );
  });

  updateTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.updateTodoList),
      exhaustMap(({ task }) =>
        this.service.update(task).pipe(
          tap((task) => this.toastr.info(`A Tarefa ${task?.description} foi movida!`, 'Status atualizado', {
            progressBar: true,
          })),
          map(() => TodoListActions.updateTodoListSuccess({ task })),
          catchError((error) => {
            this.toastr.error('Ops! algo deu errado', 'Erro', {
              progressBar: true,
            })
            return of(TodoListActions.updateTodoListError(error))
          })
        )
      )
    );
  });
}
