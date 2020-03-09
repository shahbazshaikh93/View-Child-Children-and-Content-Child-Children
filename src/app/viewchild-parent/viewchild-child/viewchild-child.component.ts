import { Component, OnInit } from '@angular/core';
import { ViewChildService } from '../service/view-child.service';

@Component({
  selector: 'app-viewchild-child',
  templateUrl: './viewchild-child.component.html',
  providers: [ViewChildService]
})
export class ViewchildChildComponent implements OnInit {

  public defaultMessage: any = null;

  constructor(
    private viewChildService: ViewChildService
  ) { }

  ngOnInit(): void {
    // this.viewChildService.show();
  }

  show(msg: any) {
    this.defaultMessage = msg;
    setTimeout(() => {
      this.defaultMessage = null;
    }, 3000);
  }

  hide() {
    console.log('>>>>>>>>>>>>>>>>>>>>>>> ----------------------- <<<<<<<<<<<<<<<<<<<<<<<<<<<');
  }
}
