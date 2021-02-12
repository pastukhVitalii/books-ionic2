import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormItemType} from "../form/form.component";

@Component({
  selector: 'app-form-items',
  templateUrl: './form-items.component.html',
  styleUrls: ['./form-items.component.scss'],
})

export class FormItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() formItems: Array<FormItemType>;
}
