import { Component } from '@angular/core';
import { ParentService } from 'parent';
import { ChildService } from 'child';
import { GrandChildService } from 'grand-child';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(
    private parent: ParentService, 
    private child: ChildService, 
    private grandChild: GrandChildService
  ) {}
}
