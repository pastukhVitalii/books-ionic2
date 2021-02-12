import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnTitle: string;

  constructor() { }

  ngOnInit() {}
  @Output() childProperty = new EventEmitter<string>();
  sendMessage() {
    this.childProperty.emit('Hello. I am child component.');
  }
}
