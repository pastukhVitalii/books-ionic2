import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FormComponent} from "./form/form.component";
import {HomeComponent} from "./home/home.component";
import {Book} from "./models/book";

const books: Array<Book> = [
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
const label = 'Library';

const routes: Routes = [
  {
    path: 'home',
    // redirectTo: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    data: {books: books},
  },
  {
    path: 'book',
    component: FormComponent,
    data: {books: books},
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
