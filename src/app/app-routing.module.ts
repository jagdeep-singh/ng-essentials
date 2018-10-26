import { NgModule } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LibraryHomeComponent} from './components/library/library-home.component';
import {AppIntroHomeComponent} from './components/library/app-intro/app-intro-home.component';
import {AppIntroComponent} from './components/library/app-intro/app-intro.component';
import {AppIntroDocsComponent} from './components/library/app-intro/docs/app-intro-docs.component';
import {AppComponent} from './app.component';

const routes : Routes = [
  {
    path: 'app',
    component: AppComponent,
    children : [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'library',
        component: LibraryHomeComponent,
        children : [
          {
            path : "app-intro",
            component: AppIntroHomeComponent,
            children : [
              {
                path : "home",
                component: AppIntroComponent,
              },
              {
                path : "docs",
                component : AppIntroDocsComponent
              },
              {
                path : "",
                redirectTo : 'home',
                pathMatch : 'full'
              }
            ]
          },
          {
            path : "",
            redirectTo : 'app-intro',
            pathMatch : 'full'
          }
        ]
      }
    ]
  },
  {
    path : '',
    redirectTo : '/app/home',
    pathMatch : 'full'
  },
  {
    path: '**',
    redirectTo : '/app/home'
    //component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        // enableTracing: true
      }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
