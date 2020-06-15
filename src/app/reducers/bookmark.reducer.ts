import { Action, createReducer, on } from '@ngrx/store';
import * as BookmarkActions from '../actions/bookmark.action';
import * as FormActions from '../actions/form.actions';
import BookmarkModel from '../models/bookmark.model';
import BookmarkState, { initializeState } from '../states/bookmark.state';

export const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(BookmarkActions.GetBookmarkAction, (state) => {
    return state;
  }),

  on(BookmarkActions.CreateBookmarkAction, (state: BookmarkState, bookmark: BookmarkModel) => {
    return {...state, Bookmarks: [...state.Bookmarks, bookmark]};
  }),

  on(BookmarkActions.SuccessGetBookmarkAction, (state: BookmarkState, { payload }) => {
    return { ...state, Bookmarks: payload };
  }),

  on(FormActions.SuccessCreateBookmarkAction, (state: BookmarkState, {payload}) => {
    return {...state, Bookmarks: [...state.Bookmarks, payload]};
  }),

  on(BookmarkActions.BeginDeleteBookmarkAction, (state: BookmarkState, {payload}) => {
    const newArr = state.Bookmarks.filter((x) => {
      return x.id !== payload.id;
    });
    return {...state, Bookmarks: newArr};
  })
);

export function BookmarkReducer(state: BookmarkState | undefined, action: Action) {
  return reducer(state, action);
}
