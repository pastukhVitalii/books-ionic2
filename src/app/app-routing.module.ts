import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FormComponent} from "./form-page/form/form.component";
import {HomeComponent} from "./home-page/home/home.component";
import {Book} from "./models/book";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

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
    Book: 'Kapitanning qizi',
    Author: 'Pushkin A.S. ',
    Publisher: 'Tashkent',
    Year: '1945'
  },
  {
    id: 3,
    ISBN: '111-000-333',
    Book: 'Капитанская дочка',
    Author: 'Пушкин А.С.',
    Publisher: 'Москва',
    Year: '1835'
  }
]

const routes: Routes = [
  {
    path: 'home',
    // redirectTo: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    data: {books: books},
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'book',
    component: FormComponent,
    data: {books: books},
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
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
