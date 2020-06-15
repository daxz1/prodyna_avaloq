import { createAction, props } from '@ngrx/store';
import BookmarkModel from '../models/bookmark.model';

/**
 * @desc Get Bookmark Action
 */
export const GetBookmarkAction = createAction('[Bookmark] - Get Bookmark');

/**
 * @desc Create Bookmark Action
 */
export const CreateBookmarkAction = createAction(
  '[Bookmark] - Create Bookmark',
  props<BookmarkModel>()
);

/**
 * @desc Begin Get Bookmark Action - Used for effects
 */
export const BeginGetBookmarkAction = createAction('[Bookmark] - Begin Get Bookmark');

/**
 * @desc Success Get Bookmark Action - Used for effects
 */
export const SuccessGetBookmarkAction = createAction(
  '[Bookmark] - Success Get Bookmark',
  props<{ payload: BookmarkModel[] }>()
);

/**
 * @desc Begin Delete Bookmark Action - Used for effects
 */
export const BeginDeleteBookmarkAction = createAction(
  '[Bookmark] - Begin Delete Bookmark Action',
  props<{ payload: BookmarkModel}>()
);

/**
 * @desc Success Delete Bookmark Action - Used for effects
 */
export const SuccessDeleteBookmarkAction = createAction(
  '[Bookmark] - Success Delete Bookmark Action',
  props<{ payload: BookmarkModel}>()
);

/**
 * @todo implement this.
 */
export const ErrorBookmark = createAction(
  '[Bookmark] - Error',
  props<Error>()
);
