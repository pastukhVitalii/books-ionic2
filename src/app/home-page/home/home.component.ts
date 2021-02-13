import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  label = 'Library';
  btnTitle = 'add book';

  constructor(private route: ActivatedRoute) {
  }

  books: Array<Book>;

  ngOnInit() {
    this.route.data.subscribe(
      (books: any) => {
        debugger
        this.books = books.books;
      }
    );
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }
}
