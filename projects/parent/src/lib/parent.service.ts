import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  constructor() { 
    console.log('hello from parent')
  }
}
