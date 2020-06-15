import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import BookmarkModel from '../../models/bookmark.model';
import BookmarkState from '../../states/bookmark.state';
import * as BookmarkActions from '../../actions/bookmark.action';
import { groupFilter } from './bookmarks.helpers';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})

export class BookmarkComponent implements OnInit {

  bookmarks$: Observable<BookmarkState>;
  BookMarkSubscription: Subscription;
  BookmarkList: BookmarkModel[] = [];

  constructor(
    private store: Store<{bookmarks: BookmarkState}>,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  )
  {
    this.bookmarks$ = store.pipe(select('bookmarks'));
  }

  deleteBookmark(id: number) {
    const bookmark: BookmarkModel = {
      id,
      name: '',
      url: '',
      group: ''
    };

    this.store.dispatch(BookmarkActions.BeginDeleteBookmarkAction({ payload: bookmark }));
    this.snackBar.open('Deleted Successfully!', 'Dismiss', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

  openDialog() {
    this.dialog.open(FormComponent);
  }

  ngOnInit(): void {
    this.BookMarkSubscription = this.bookmarks$
      .pipe(
        map(x => {
          const bookmarks = x.Bookmarks;
          const personal = groupFilter(bookmarks, 'group', 'Personal');
          const work = groupFilter(bookmarks, 'group', 'Work');
          const entertainment = groupFilter(bookmarks, 'group', 'Entertainment');
          const misc = groupFilter(bookmarks, 'group', 'Misc');
          this.BookmarkList = [...personal, ...work, ...entertainment, ...misc];
        })
      ).subscribe();
    this.store.dispatch(BookmarkActions.BeginGetBookmarkAction());
  }

  OnDestroy() {
    if (this.BookMarkSubscription) {
      this.BookMarkSubscription.unsubscribe();
    }
  }
}
