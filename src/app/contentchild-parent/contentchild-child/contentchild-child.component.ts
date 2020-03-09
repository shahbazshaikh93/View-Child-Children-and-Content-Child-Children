import { Component, OnInit, ContentChild, ViewChild, AfterViewInit, AfterContentInit, ViewContainerRef, ElementRef } from '@angular/core';
import { MessageComponent } from 'src/app/message/message.component';
import { ViewChildDirective } from 'src/app/directives/view-child.directive';
import { ContentChildDirective } from 'src/app/directives/content-child.directive';

@Component({
  selector: 'app-contentchild-child',
  templateUrl: './contentchild-child.component.html'
})
export class ContentchildChildComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('h1') h1;

  @ContentChild('slotOneRef', { read: ElementRef, static: false }) slotOneRef: ElementRef;
  @ContentChild('slotTwoRef', {read: ViewContainerRef}) slotTwoRef: ViewContainerRef;

  @ContentChild(MessageComponent) messageComponent: MessageComponent;

  @ContentChild(ContentChildDirective) contentChildDirective: ContentChildDirective;

  constructor() { }

  ngOnInit(): void {
    // console.log('ngOnInit', this.slotOneRef);
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit', this.slotOneRef);
    // console.log(this.h1);
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit', this.slotOneRef);
    // console.log('ngAfterContentInit', this.slotTwoRef);
    // console.log('ngAfterContentInit', this.contentchildChildComponent);
    // console.log('Contentchild MessageComponent', this.messageComponent);
    console.log(this.contentChildDirective);
  }
}
