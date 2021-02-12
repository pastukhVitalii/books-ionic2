import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormItemType} from "../../models/book";

@Component({
  selector: 'app-form-items',
  templateUrl: './form-items.component.html',
  styleUrls: ['./form-items.component.scss'],
})

export class FormItemsComponent implements OnInit {
  @Input() formItems: Array<FormItemType>;

  constructor() {
  }

  ngOnInit() {
  }

}
