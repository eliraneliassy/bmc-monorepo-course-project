import { Book } from '@bmc/books';

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bmc-b-course-project-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {
  @Input() book?: Book;
  @Output() addToCart: EventEmitter<Book> = new EventEmitter<Book>();

  addToCartClicked(){
    this.addToCart.emit(this.book);
  }
}
