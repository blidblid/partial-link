import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-parent',
  template: `
    <p>
      parent works!
    </p>
  `,
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
