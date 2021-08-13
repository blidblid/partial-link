import { Injectable } from '@angular/core';
import { ParentService } from 'parent';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  constructor(private parent: ParentService) { 
    console.log('child');
  }
}
