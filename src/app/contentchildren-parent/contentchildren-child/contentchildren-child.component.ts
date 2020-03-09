import { Component, OnInit, ContentChildren, QueryList, AfterViewInit, AfterContentInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-contentchildren-child',
  templateUrl: './contentchildren-child.component.html'
})
export class ContentchildrenChildComponent implements OnInit, AfterContentInit {

  @ContentChildren('contentProjectRef') tabList: QueryList<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.tabList.forEach(tabInstance => console.log(tabInstance));
  }
}
