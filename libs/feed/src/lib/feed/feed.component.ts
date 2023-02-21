import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book, BooksService } from '@bmc/books';

@Component({
  selector: 'bmc-b-course-project-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {

  books$: Observable<Book[]>;
  constructor(private booksService: BooksService,
  ) {
    this.books$ = this.booksService.getBooks('Angular');
  }
}
