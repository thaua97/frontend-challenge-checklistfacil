import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { TodoListActions, TodoListSelectors } from '@frontend-challenge/shared/app/data-access';
import { Task, TaskStatus } from '@frontend-challenge/shared/util/api-interfaces';
import { Observable, of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [StoreModule.forRoot({})], // Add your actual store configuration here
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jest.fn(),
            select: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadTodoList action on ngOnInit', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(TodoListActions.loadTodoList());
  });

  it('should dispatch updateTodoList action with TaskStatus.Doing on start', () => {
    const task: Task = { id: '1', description: 'Task 1', status: TaskStatus.ToDo };
    component.start(task);
    expect(store.dispatch).toHaveBeenCalledWith(
      TodoListActions.updateTodoList({
        task: { ...task, status: TaskStatus.Doing },
      })
    );
  });

  it('should dispatch updateTodoList action with TaskStatus.ToDo on stop', () => {
    const task: Task = { id: '1', description: 'Task 1', status: TaskStatus.Doing };
    component.stop(task);
    expect(store.dispatch).toHaveBeenCalledWith(
      TodoListActions.updateTodoList({
        task: { ...task, status: TaskStatus.ToDo },
      })
    );
  });

  it('should dispatch updateTodoList action with TaskStatus.Done on conclude', () => {
    const task: Task = { id: '1', description: 'Task 1', status: TaskStatus.Doing };
    component.conclude(task);
    expect(store.dispatch).toHaveBeenCalledWith(
      TodoListActions.updateTodoList({
        task: { ...task, status: TaskStatus.Done },
      })
    );
  });

  it('should dispatch removeTodoList action on remove', () => {
    const task: Task = { id: '1', description: 'Task 1', status: TaskStatus.ToDo };
    component.remove(task);
    expect(store.dispatch).toHaveBeenCalledWith(TodoListActions.removeTodoList({ taskId: task.id }));
  });
});
