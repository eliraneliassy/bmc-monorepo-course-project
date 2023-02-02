import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book, BooksService } from '@bmc/books';



@Component({
  selector: 'bmc-b-course-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  books$: Observable<Book[]>
  constructor(private booksService: BooksService) { 
    this.books$ = this.booksService.getBooks('Angular');
  }
}
