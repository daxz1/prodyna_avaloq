import BookmarkModel from '../models/bookmark.model';

export default class BookmarkState {
  Bookmarks: Array<BookmarkModel>;
}

export const initializeState = (): BookmarkState => ({ Bookmarks: Array<BookmarkModel>()});
