import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() label: string;
  @Input() btnTitle1: string;

  constructor() { }

  ngOnInit() {}
  messageFromChild = '';
  showChildMessage(message: string) {
    // debugger
    this.messageFromChild = message;
  }}
  /*btnTitle= this.btnTitle1;*/
  /*messageFromChild = '';
  showChildMessage(message: string) {
    this.messageFromChild = message;
  }*/

