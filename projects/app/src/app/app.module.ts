import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GrandChildModule } from 'grand-child';
import { ChildModule } from 'child';
import { ParentModule } from 'parent';

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
