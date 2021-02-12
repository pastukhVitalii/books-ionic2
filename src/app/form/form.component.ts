import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../models/book";

export type FormItemType = {
  id: number,
  title: string,
  value: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class FormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  };

  books: Book[];
  newBook: Book;

  ngOnInit() {
    this.route.data.subscribe(
      (data: any) => {              // !!!
        // debugger
        this.books = data.books;
      }
    );
  }

  label = 'New book';
  btnTitle1 = 'Add book';
  @Output() addBookEmitter = new EventEmitter<Array<any>>();
  formItems: Array<FormItemType> = [
    {id: 100, title: 'ISBN', value: ''},
    {id: 101, title: 'Book', value: ''},
    {id: 102, title: 'Author', value: ''},
    {id: 103, title: 'Publisher', value: ''},
    {id: 104, title: 'Year', value: ''},
  ];

  addBook() {
    let isbn = this.formItems[0].value
    let book = this.formItems[1].value
    let author = this.formItems[2].value
    let publisher = this.formItems[3].value
    let year = this.formItems[4].value
    this.addBookEmitter.emit(this.formItems);

    this.books.push({
      id: 111,
      ISBN: isbn,
      Book: book,
      Author: author,
      Publisher: publisher,
      Year: year,
    })
    this.router.navigate(['/home']);

    console.log(this.books);
  }
}
