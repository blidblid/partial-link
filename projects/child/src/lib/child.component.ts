import { Component, OnInit } from '@angular/core';
import { ParentService } from 'parent';

@Component({
  selector: 'lib-child',
  template: `
    <p>
      child works!
    </p>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  constructor(private parent: ParentService) { }

  ngOnInit(): void {
  }

}
