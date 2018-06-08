import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import linkData from '../data/links';
import skillData from '../data/skills';
import projectData from '../data/projects';
import webpageData from '../data/webapp';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  links = new BehaviorSubject<any>(linkData);
  skills = new BehaviorSubject<any>(skillData); 
  projects = new BehaviorSubject<any>(projectData);
  webpages = new BehaviorSubject<any>(webpageData);
  constructor() { }
}
