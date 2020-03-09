import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentchildren-parent',
  templateUrl: './contentchildren-parent.component.html'
})
export class ContentchildrenParentComponent implements OnInit {

  tabs = [];

  constructor() { }

  ngOnInit(): void {
    this.tabs = [
      { title: 'First Tab title', content: 'First Tab content' },
      { title: 'Second Tab title', content: 'Second Tab content' },
      { title: 'Third Tab title', content: 'Third Tab content' }
    ];
  }

}
