import { LoggerService } from '@bmc/logger';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book, BooksService } from '@bmc/books';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'bmc-b-course-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {


  books$: Observable<Book[]>

  images: string[] = [
    `https://cdn.cheapism.com/images/011618_most_beautiful_views_in_the_world_sli.max-784x410_ZXOqfVp.jpg`,
    `https://loveincorporated.blob.core.windows.net/contentimages/gallery/32cfa085-5a31-48c2-bec8-46b887ac9428-views_great_wall_china.jpg`,
    `https://www.hostelworld.com/blog/wp-content/uploads/2018/11/hong-kong.jpg`,
    `https://i.insider.com/5d1fb8b121a86105f7522184?width=1000&format=jpeg&auto=webp`
  ]

  names: string[] = [
    'Eliran',
    'Yoni',
    'Yakov',
    'Maayan',
    'Shahar'
  ];

  form: FormGroup;
  constructor(private booksService: BooksService,
    private loggerService: LoggerService, private fb: FormBuilder) {
    this.books$ = this.booksService.getBooks('Angular');
    this.loggerService.log('Hello from the other side');

    this.form = this.fb.group(
      {
        name: this.fb.control(null),
        password: this.fb.control(null)
      }
    )
  }

  submit(){
    console.log(this.form);
    
  }
}
