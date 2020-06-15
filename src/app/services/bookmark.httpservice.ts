import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import BookmarkModel from '../models/bookmark.model';

@Injectable({
  providedIn: 'root'
})

export class BookmarkHttpService {
  private API_URL = 'http://localhost:3000/bookmarks';

  constructor(private httpClient: HttpClient) {}

  getBookmarks(): Observable<BookmarkModel[]> {
    return this.httpClient.get<BookmarkModel[]>(this.API_URL);
  }

  createBookmark(payload: BookmarkModel): Observable<BookmarkModel> {
    return this.httpClient.post<BookmarkModel>(this.API_URL, JSON.stringify(payload), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteBookMark(payload: BookmarkModel): Observable<BookmarkModel> {
    const url = `${this.API_URL}/${payload.id}`;
    return this.httpClient.delete<BookmarkModel>(url);
  }
}
