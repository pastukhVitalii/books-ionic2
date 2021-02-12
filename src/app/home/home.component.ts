import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  // books = []
  books: Book[];

  ngOnInit() {
    this.route.data.subscribe(
      (data: any) => {              // !!!
        // debugger
        this.books = data.books;
        // this.books = data['message'];
      }
    );

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


  label = 'Library';
  btnTitle1 = 'home';
}
