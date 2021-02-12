import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ButtonComponent} from "./button/button.component";
import {HeaderComponent} from "./header/header.component";
import {BooksComponent} from "./books/books.component";
import {FormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";
import {HomeComponent} from "./home/home.component";
import {FormItemsComponent} from "./form-items/form-items.component";
import {FormItemComponent} from "./form-item/form-item.component";

@NgModule({
  declarations: [AppComponent, ButtonComponent, HeaderComponent, BooksComponent, FormComponent, HomeComponent, FormItemsComponent, FormItemComponent],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
