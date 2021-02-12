import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ButtonComponent} from "./button/button.component";
import {BooksComponent} from "./home-page/books/books.component";
import {FormsModule} from "@angular/forms";
import {FormComponent} from "./form-page/form/form.component";
import {HomeComponent} from "./home-page/home/home.component";
import {FormItemsComponent} from "./form-page/form-items/form-items.component";
import {FormItemComponent} from "./form-page/form-item/form-item.component";

@NgModule({
  declarations: [AppComponent, ButtonComponent, BooksComponent, FormComponent, HomeComponent, FormItemsComponent, FormItemComponent],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
