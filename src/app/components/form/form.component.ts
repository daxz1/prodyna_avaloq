import { Component, OnInit } from '@angular/core';
import BookmarkModel from '../../models/bookmark.model';
import * as FormActions from '../../actions/form.actions';
import {Store} from '@ngrx/store';
import BookmarkState from '../../states/bookmark.state';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name = '';
  url = '';
  group = '';

  constructor(
    private store: Store<{bookmarks: BookmarkState}>,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
  }

  createBookmark() {
    const { name, url, group } = this;
    const bookmark: BookmarkModel = { name, url, group };
    this.store.dispatch(FormActions.BeginCreateBookmarkAction({ payload: bookmark}));
    this.snackBar.open('Added Successfully!', 'Dismiss', {
      duration: 2000,
      verticalPosition: 'top'
    });
    this.name = '';
    this.url = '';
    this.group = '';
    this.dialog.closeAll();
  }
}
