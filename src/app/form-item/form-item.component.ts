import {Component, Input, OnInit} from '@angular/core';
import {FormItemType} from "../form/form.component";

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
})

export class FormItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() formItemName: string;
  @Input() item: FormItemType;
}
