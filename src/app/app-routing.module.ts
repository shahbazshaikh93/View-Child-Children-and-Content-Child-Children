import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { ViewchildrenParentComponent } from './viewchildren-parent/viewchildren-parent.component';
import { ContentchildrenParentComponent } from './contentchildren-parent/contentchildren-parent.component';
import { ContentchildParentComponent } from './contentchild-parent/contentchild-parent.component';

const routes: Routes = [
  {
    path: 'viewChild',
    component: ViewchildParentComponent
  },
  {
    path: 'viewChildern',
    component: ViewchildrenParentComponent
  },
  {
    path: 'contentChild',
    component: ContentchildParentComponent
  },
  {
    path: 'contentChildren',
    component: ContentchildrenParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
