import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, TemplateRef, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';
import { ViewChildDirective } from '../directives/view-child.directive';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { AccordionComponent } from 'ngx-bootstrap/accordion';
import { ViewChildService } from './service/view-child.service';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html'
})
export class ViewchildParentComponent implements OnInit, AfterViewInit {

  /** Get the ElementRef */
  @ViewChild('someElement', { static: true }) elementReference: ElementRef;

  /** Get the refrence using Angular Directive */
  @ViewChild(NgModel) ngModelTextBox: NgModel;

  /** Get the DOM ElementRef refrence and manipulating DOM. */
  @ViewChild('hoverRef', { read: ElementRef }) hoverRef: ElementRef;
  @ViewChild('createTagRef', { read: ElementRef }) createTagRef: ElementRef;

  /** Get the refrence of child component */
  @ViewChild(ViewchildChildComponent) viewChildComp: ViewchildChildComponent;

  /** Get the refrence of Directive */
  @ViewChild(ViewChildDirective) ViewChildDirective: ViewChildDirective;

  /** Get the refrence of ng-contanier */
  @ViewChild('templateRef') templateRef: TemplateRef<ElementRef>;
  /** Get the ViewContainerRef for copy template */
  @ViewChild('copyTemplate', { read: ViewContainerRef }) copyTemplate: ViewContainerRef;
  /**  */
  @ViewChild('contentProjection', { read: ViewContainerRef }) contentProjection: ViewContainerRef;

  @ViewChild(ViewChildService) viewChildService: ViewChildService;

  public userName: string;
  public colorName: string;
  public months: string;
  public lessons: boolean;
  public shahu: boolean = true;

  public bsInlineValue = new Date();

  constructor(
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver
  ) {
    this.userName = '';
    this.lessons = true;
  }

  ngOnInit(): void {
    console.log('In ngAfterViewInit Using document.getElementById()', document.getElementById('someElement'));
    console.log('In ngOnInit Using @ViewChild()', this.elementReference.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('In ngAfterViewInit Using @ViewChild()', this.elementReference.nativeElement);

    this.ngModelTextBox.valueChanges.subscribe((value) => {
      console.log('ngModelTextBox calling.', value);
    });

    console.log('ViewChild Service', this.viewChildService.students);

  }

  onMouseOver() {
    /** DOM manipulation using element refernce */
    this.renderer.addClass(this.hoverRef.nativeElement, 'badge-circle-hover');
  }

  onMouseLeave() {
    /** DOM manipulation using element refernce */
    this.renderer.removeClass(this.hoverRef.nativeElement, 'badge-circle-hover');
  }

  createLiTag(monthName: string) {
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText(monthName);
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.createTagRef.nativeElement, li);
    this.months = '';
  }

  success() {
    /** Saved successfully show the message */
    const msg: any = { message: 'Saved successfully!', status: true };
    this.viewChildComp.show(msg);
    this.viewChildComp.hide();
  }

  failed() {
    /** Saved failed show the error message */
    const msg: any = { message: 'Failed to save!', status: false };
    this.viewChildComp.show(msg);
  }

  scaleUp() {
    const className = 'zoom-hover';
    /** Access the directive method using directive refernce */
    this.ViewChildDirective.onMouseOver(className);
  }

  scaleDown() {
    const className = 'zoom-hover';
    /** Access the directive method using directive refernce */
    this.ViewChildDirective.onMouseLeave(className);
  }


  public createTemplate() {
    this.copyTemplate.createEmbeddedView(this.templateRef);
  }

  public createDynamicComponent() {
    const componentFactory = this.resolver.resolveComponentFactory(DynamicComponent);
    this.contentProjection.createComponent(componentFactory);
  }

}
