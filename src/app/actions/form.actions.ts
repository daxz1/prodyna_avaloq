import {createAction, props} from '@ngrx/store';
import BookmarkModel from '../models/bookmark.model';

/**
 * @desc Begin Create Bookmark Action
 */
export const BeginCreateBookmarkAction = createAction(
  '[Form] - Begin Create Bookmark',
  props<{ payload: BookmarkModel}>()
);

/**
 * @desc Success Create Bookmark Action - Used for effects
 */
export const SuccessCreateBookmarkAction = createAction(
  '[Form] - Success Create Bookmark',
  props<{ payload: BookmarkModel}>()
);

/**
 * @todo implement this.
 */
export const ErrorBookmark = createAction(
  '[Bookmark] - Error',
  props<Error>()
);
