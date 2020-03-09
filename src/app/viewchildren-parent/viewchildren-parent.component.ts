import { Component, OnInit, ViewChildren, QueryList, ElementRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ViewchildrenChildComponent } from './viewchildren-child/viewchildren-child.component';
import { ViewChildrenDirective } from '../directives/view-children.directive';

@Component({
  selector: 'app-viewchildren-parent',
  templateUrl: './viewchildren-parent.component.html'
})
export class ViewchildrenParentComponent implements OnInit, AfterViewInit {

  @ViewChildren('buttonRef') buttonRef: QueryList<ElementRef>;
  @ViewChildren('badgeRef') badgeRef: QueryList<ElementRef>;

  @ViewChildren('studentRef', { read: ElementRef }) asd: QueryList<ElementRef>;
  @ViewChildren('studentRef', { read: ViewContainerRef }) asd1: QueryList<ViewContainerRef>;

  @ViewChildren(NgModel) multipleNgModelTextBox: QueryList<NgModel>;

  @ViewChildren('userName, userAge, userDesignation') userInfoReference: QueryList<NgModel>;

  @ViewChildren(ViewchildrenChildComponent) viewChildrenComponent: QueryList<ViewchildrenChildComponent>;

  @ViewChildren(ViewChildrenDirective) viewChildrenDirective: QueryList<ViewChildrenDirective>;

  public badges: any[];
  public firstName: string;
  public lastName: string;
  public address: string;

  constructor() {
    this.badges = [
      {
        name: 'Primary',
        className: 'badge badge-primary'
      },
      {
        name: 'Secondary',
        className: 'badge badge-secondary'
      },
      {
        name: 'Success',
        className: 'badge badge-success'
      },
      {
        name: 'Danger',
        className: 'badge badge-danger'
      },
      {
        name: 'Warning',
        className: 'badge badge-warning'
      },
      {
        name: 'Info',
        className: 'badge badge-info'
      },
      {
        name: 'Light',
        className: 'badge badge-light'
      },
      {
        name: 'Dark',
        className: 'badge badge-dark'
      }
    ];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    console.log('Get of mutiple static Button refernce', this.buttonRef.first);
    console.log('Get of mutiple static Button refernce', this.buttonRef.last);
    console.log('Get of mutiple static Button refernce', this.buttonRef.length);
    // console.log('Get of mutiple static Button refernce', this.buttonRef.changes);
    this.multipleNgModelTextBox.changes.subscribe(() => {
      console.log('changed');
    });

    // console.log(this.userInfoReference.first);
    this.viewChildrenDirective.forEach((res) => { console.log(res) });
  }
}
