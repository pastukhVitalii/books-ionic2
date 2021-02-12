import {Component, Input, OnInit} from '@angular/core';
import {FormItemType} from "../../models/book";

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
})

export class FormItemComponent implements OnInit {
  @Input() formItemName: string;
  @Input() item: FormItemType;

  constructor() {
  }

  ngOnInit() {
  }
}
