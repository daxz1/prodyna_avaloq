import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action} from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as FormActions from '../actions/form.actions';
import BookmarkModel from '../models/bookmark.model';
import {BookmarkHttpService} from '../services/bookmark.httpservice';

@Injectable()
export class FormsEffects {

  constructor(private bookmarkHttpService: BookmarkHttpService, private action$: Actions) {}

  CreateBookmark$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(FormActions.BeginCreateBookmarkAction),
      mergeMap(action =>
        this.bookmarkHttpService.createBookmark(action.payload).pipe(
          map((data: BookmarkModel) => {
            return FormActions.SuccessCreateBookmarkAction({payload: data});
          }),
          catchError((error: Error) => {
            return of(FormActions.ErrorBookmark(error));
          })
        )
      )
    )
  );
}
