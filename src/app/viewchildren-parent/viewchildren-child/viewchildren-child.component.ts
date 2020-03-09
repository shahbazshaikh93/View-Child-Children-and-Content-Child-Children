import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewchildren-child',
  templateUrl: './viewchildren-child.component.html'
})
export class ViewchildrenChildComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
