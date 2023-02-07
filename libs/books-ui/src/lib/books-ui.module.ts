import { ButtonComponentModule } from '@bmc/components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [CommonModule, ButtonComponentModule],
  declarations: [BookComponent],
  exports: [BookComponent]
})
export class BooksUiModule {}
