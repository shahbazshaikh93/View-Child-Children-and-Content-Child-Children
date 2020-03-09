import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { ViewchildChildComponent } from './viewchild-parent/viewchild-child/viewchild-child.component';
import { ViewchildrenParentComponent } from './viewchildren-parent/viewchildren-parent.component';
import { ViewchildrenChildComponent } from './viewchildren-parent/viewchildren-child/viewchildren-child.component';
import { ViewChildDirective } from './directives/view-child.directive';
import { ViewChildrenDirective } from './directives/view-children.directive';
import { ContentchildrenParentComponent } from './contentchildren-parent/contentchildren-parent.component';
import { ContentchildrenChildComponent } from './contentchildren-parent/contentchildren-child/contentchildren-child.component';
import { ContentchildParentComponent } from './contentchild-parent/contentchild-parent.component';
import { ContentchildChildComponent } from './contentchild-parent/contentchild-child/contentchild-child.component';
import { ContentChildDirective } from './directives/content-child.directive';
import { ContentChildrenDirective } from './directives/content-children.directive';
import { MessageComponent } from './message/message.component';

// import { AccordionModule } from 'ngx-bootstrap/accordion';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ViewchildParentComponent,
    ViewchildChildComponent,
    ViewchildrenParentComponent,
    ViewchildrenChildComponent,
    ViewChildDirective,
    ViewChildrenDirective,
    ContentchildrenParentComponent,
    ContentchildrenChildComponent,
    ContentchildParentComponent,
    ContentchildChildComponent,
    ContentChildDirective,
    ContentChildrenDirective,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // AccordionModule,
    // BsDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
