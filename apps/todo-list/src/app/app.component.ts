import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  TodoListActions,
  TodoListSelectors,
} from '@frontend-challenge/shared/app/data-access';
import {
  Task,
  TaskStatus,
} from '@frontend-challenge/shared/util/api-interfaces';

@Component({
  selector: 'frontend-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todo$: Observable<Task[]> = this.store.select(TodoListSelectors.todoTaskList);
  doing$: Observable<Task[]> = this.store.select(
    TodoListSelectors.doingTaskList
  );
  done$: Observable<Task[]> = this.store.select(TodoListSelectors.doneTaskList);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(TodoListActions.loadTodoList());
  }

  remove(task: Task) {
    this.store.dispatch(TodoListActions.removeTodoList({ taskId: task.id }));
  }

  start(task: Task) {
    this.store.dispatch(
      TodoListActions.updateTodoList({
        task: {
          ...task,
          status: TaskStatus.Doing,
        },
      })
    );
  }

  restart(task: Task) {
    this.start(task);
  }

  stop(task: Task) {
    this.store.dispatch(
      TodoListActions.updateTodoList({
        task: {
          ...task,
          status: TaskStatus.ToDo,
        },
      })
    );
  }

  conclude(task: Task) {
    this.store.dispatch(
      TodoListActions.updateTodoList({
        task: {
          ...task,
          status: TaskStatus.Done,
        },
      })
    );
  }
}
