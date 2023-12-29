import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIFormComponent } from './ui-form.component';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { SharedAppDataAccessModule } from '@frontend-challenge/shared/app/data-access';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [UIFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedAppDataAccessModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [UIFormComponent]
})

export class UIFormModule {}
