import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SharedAppDataAccessModule } from '@frontend-challenge/shared/app/data-access';
import { SharedAppUiModule } from '@frontend-challenge/shared/app/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    MatIconModule,
    MatListModule,
    SharedAppDataAccessModule,
    SharedAppUiModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
