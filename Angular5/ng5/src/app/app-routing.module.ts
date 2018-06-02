import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }from './home/home.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { WebappPageComponent }from './webapp-page/webapp-page.component';
import { ArduinoPageComponent }from './arduino-page/arduino-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Projects',
    component: ProjectPageComponent
  },
  {
    path: 'WebPages',
    component: WebappPageComponent
  },
  {
    path: 'Arduino',
    component: ArduinoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
