import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pronoweb2';

  result: string = '';

  constructor(public dialog: MatDialog) {}

}
