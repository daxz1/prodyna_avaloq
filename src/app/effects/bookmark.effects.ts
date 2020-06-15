import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action} from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BookmarkActions from '../actions/bookmark.action';
import BookmarkModel from '../models/bookmark.model';
import {BookmarkHttpService} from '../services/bookmark.httpservice';

@Injectable()
export class BookmarkEffects {

  constructor(private bookmarkHttpService: BookmarkHttpService, private action$: Actions) {}

  GetBookmarks$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BookmarkActions.BeginGetBookmarkAction),
      mergeMap(action =>
        this.bookmarkHttpService.getBookmarks().pipe(
          map((data: BookmarkModel[]) => {
            return BookmarkActions.SuccessGetBookmarkAction({ payload: data});
          }),
          catchError((error: Error) => {
            return of(BookmarkActions.ErrorBookmark(error));
          })
        )
      )
    )
  );

  DeleteBookmark$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BookmarkActions.BeginDeleteBookmarkAction),
      mergeMap(action =>
        this.bookmarkHttpService.deleteBookMark(action.payload).pipe(
          map((data: BookmarkModel) => {
            return BookmarkActions.SuccessDeleteBookmarkAction({payload: data});
          }),
          catchError((error: Error) => {
            return of(BookmarkActions.ErrorBookmark(error));
          })
        )
      )
    )
  );


}
