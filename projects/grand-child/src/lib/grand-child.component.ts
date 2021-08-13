import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-grand-child',
  template: `
    <p>
      grand-child works!
    </p>
  `,
  styles: [
  ]
})
export class GrandChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
