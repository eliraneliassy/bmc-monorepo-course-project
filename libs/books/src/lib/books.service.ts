import { Book } from './book.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`

  constructor(private httpClient: HttpClient) { }

  getBooks(query: string): Observable<Book[]> {
    let params: HttpParams = new HttpParams();
    params = params.append(`q`, query);

    return this.httpClient.get<any>(this.BASE_URL, { params })
      .pipe(
        map((res: any) => res.items),
        map((items: any[]) => items.map((item: any) => ({
          title: item.volumeInfo.title,
          description: item.volumeInfo.description,
          price: item.volumeInfo.pageCount,
          previewImgUrl: item.volumeInfo.imageLinks.thumbnail
        })))
      );
  }
}
