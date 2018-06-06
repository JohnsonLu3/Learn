import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';
import { WebpageShowcaseComponent } from './webpage-showcase/webpage-showcase.component';
import { GameControllerComponent } from './svg/game-controller/game-controller.component';
import { WebSvgComponent } from './svg/web-svg/web-svg.component';
import { FloppyComponent } from './svg/floppy/floppy.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { WebappPageComponent } from './webapp-page/webapp-page.component';
import { ArduinoPageComponent } from './arduino-page/arduino-page.component';
import { TopButtonComponent } from './buttons/top-button/top-button.component';
import { NavButtonComponent } from './buttons/nav-button/nav-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    SkillsComponent,
    FooterComponent,
    ProjectShowcaseComponent,
    WebpageShowcaseComponent,
    GameControllerComponent,
    WebSvgComponent,
    FloppyComponent,
    ProjectPageComponent,
    WebappPageComponent,
    ArduinoPageComponent,
    TopButtonComponent,
    NavButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
