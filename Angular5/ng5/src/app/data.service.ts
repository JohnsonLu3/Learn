import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import linkData from '../data/links';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  links = new BehaviorSubject<any>(linkData); 
  constructor() { }
}
