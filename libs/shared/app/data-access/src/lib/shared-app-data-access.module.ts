import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoListEffects } from './todo-list.effects';
import {HttpClientModule} from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forFeature(
      fromTodoList.todoListFeatureKey,
      fromTodoList.reducer
    ),
    EffectsModule.forFeature([TodoListEffects]),
  ],
})
export class SharedAppDataAccessModule {}
