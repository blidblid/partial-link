import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChildModule } from 'child';
import { ParentModule } from 'parent';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChildModule,
    ParentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
