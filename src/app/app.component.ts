import {Component} from '@angular/core';
import {Book} from "./models/book";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {
  }

    /*books: Array<Book> = [
      {
        id: 1,
        ISBN: '111-000 - 111',
        Book: 'Captain\'s daughter',
        Author: 'Pushkin A.S.',
        Publisher: 'San Diego',
        Year: '1982'
      },
      {
        id: 2,
        ISBN: '111-000-222',
        Book: 'Captain\'s daughter',
        Author: 'Pushkin A.S.',
        Publisher: 'San Diego',
        Year: '1982'
      },
      {
        id: 1,
        ISBN: '111-000 - 111',
        Book: 'Captain\'s daughter',
        Author: 'Pushkin A.S.',
        Publisher: 'San Diego',
        Year: '1982'
      }
    ]
  label = 'Library';*/
}
