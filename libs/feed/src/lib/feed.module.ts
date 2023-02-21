import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { feedRoutes } from './lib.routes';
import { FeedComponent } from './feed/feed.component';
import { BooksUiModule } from '@bmc/books-ui';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(feedRoutes),
    BooksUiModule
   ],
  declarations: [FeedComponent],
})
export class FeedModule {}
