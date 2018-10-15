import { NgModule } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AppComponent} from './app.component';

const routes : Routes = [
  {
    path: 'app',
    component: AppComponent,
    children : [
      {
        path: 'home',
        component: HomeComponent
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
