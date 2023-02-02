import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { booksRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(booksRoutes)],
})
export class BooksModule {}
