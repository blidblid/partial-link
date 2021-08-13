import { Injectable } from '@angular/core';
import { ParentService } from 'parent';
import { ChildService } from 'child';

@Injectable({
  providedIn: 'root'
})
export class GrandChildService {
  constructor(private child: ChildService, private parent: ParentService) { }
}
