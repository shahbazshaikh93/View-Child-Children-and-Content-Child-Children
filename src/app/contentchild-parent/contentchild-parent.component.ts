import { Component, OnInit, ViewChild, AfterViewInit, ContentChild, AfterContentInit } from '@angular/core';
import { ContentchildChildComponent } from './contentchild-child/contentchild-child.component';
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-contentchild-parent',
  templateUrl: './contentchild-parent.component.html'
})
export class ContentchildParentComponent implements OnInit, AfterContentInit {

  // @ViewChild('slotOneRef') slotOneRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    
  }
}
