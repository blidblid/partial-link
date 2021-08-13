import { NgModule } from '@angular/core';
import { ParentModule } from 'parent';
import { ChildComponent } from './child.component';



@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    ParentModule,
  ],
  exports: [
    ChildComponent,
    ParentModule,
  ]
})
export class ChildModule { }
