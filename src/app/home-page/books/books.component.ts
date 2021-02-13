import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../models/book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})

export class BooksComponent implements OnInit {

  btnTitle = 'Delete book';
  @Input() books: Array<Book>;
  @Output() getBookIdEmitter = new EventEmitter<number>()

  onClick(id: number) {
    this.getBookIdEmitter.emit(id)
  }

  constructor() {
  }

  ngOnInit() {
  }
}
