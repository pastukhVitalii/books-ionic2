import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../models/book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  btnTitle = 'Add book'
  // books: Book[];

  constructor() {
  }

  @Input() books: Array<Book>;

  ngOnInit() {

    /*this.books = [
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
    ]*/
  }

  /*bookId = 100;
  btnTitle = 'DELETE BOOK';
  inputISBN = '';
  inputBook = '';
  inputAuthor = '';
  inputPublisher = '';
  inputYear = '';

  addBook() {
    this.books.push({
      id: this.bookId + 1,
      ISBN: this.inputISBN,
      Book: this.inputBook,
      Author: this.inputAuthor,
      Publisher: this.inputPublisher,
      Year: this.inputYear
    });

    // this.inputTodo = "";
  }*/

  // @Input() heading: string;
  /*title = ''
  @Output() childProperty = new EventEmitter<string>();
  sendMessage() {
    this.childProperty.emit('Hello. I am child component.');
  }*/
}
