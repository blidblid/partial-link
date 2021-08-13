import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GrandChildModule } from 'grand-child';
import { ChildModule } from 'projects/child/src';
import { ParentModule } from 'projects/parent/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GrandChildModule,
    ChildModule,
    ParentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
