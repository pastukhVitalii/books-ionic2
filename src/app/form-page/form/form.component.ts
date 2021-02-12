import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book, FormItemType} from "../../models/book";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class FormComponent implements OnInit {

  label = 'New book';
  books: Array<Book>;
  newBook: Book;
  btnTitle = 'Add book';
  @Output() addBookEmitter = new EventEmitter<Array<any>>();
  formItems: Array<FormItemType> = [
    {id: 100, title: 'ISBN', value: ''},
    {id: 101, title: 'Book', value: ''},
    {id: 102, title: 'Author', value: ''},
    {id: 103, title: 'Publisher', value: ''},
    {id: 104, title: 'Year', value: ''},
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
  };


  ngOnInit() {
    this.route.data.subscribe(
      (data: any) => {
        this.books = data.books;
      }
    );
  }

  addBook() {
    let isbn = this.formItems[0].value;
    let book = this.formItems[1].value;
    let author = this.formItems[2].value;
    let publisher = this.formItems[3].value;
    let year = this.formItems[4].value;
    this.addBookEmitter.emit(this.formItems);

    let id = Math.random() * 100

    this.books.push({
      id: id,
      ISBN: isbn,
      Book: book,
      Author: author,
      Publisher: publisher,
      Year: year,
    })
    this.router.navigate(['/home']);
  }
}
