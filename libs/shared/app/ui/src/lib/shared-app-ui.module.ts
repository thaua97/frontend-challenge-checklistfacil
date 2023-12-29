import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIFormModule } from './components/ui-form/ui-form.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    UIFormModule,
  ],
  exports: [UIFormModule],
})
export class SharedAppUiModule {}
