import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import {LibraryHomeComponent} from './components/library/library-home.component';
import {AppIntroHomeComponent} from './components/library/app-intro/app-intro-home.component';
import {AppIntroComponent} from './components/library/app-intro/app-intro.component';
import {AppIntroDocsComponent} from './components/library/app-intro/docs/app-intro-docs.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    LibraryHomeComponent,
    AppIntroHomeComponent,
    AppIntroComponent,
    AppIntroDocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
