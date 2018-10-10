import { Component } from '@angular/core';
import { AppIntroService } from 'ng-essential';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-essentials';

  inputData = [
    {
      message : `Hey this is welcome text`,
      selector : "#welcome-tag",
      position : 'bottom'
    },
    {
      message : `Hey and this is our logo`,
      selector : "#angular-logo",
      position : 'left'
    },
    {
      message : `Hey and this is Angular tutorial`,
      selector : "[href='https://angular.io/tutorial']",
      position : 'top'
    },
    {
      message : `Hey and this is our git hub url you can watch the vdeo here. :)`,
      selector : "[href='https://github.com/angular/angular-cli/wiki']",
      position : 'right'
    }
  ];

  ngAfterViewInit(){
    console.log("view init is done");
    let introApp : any = new AppIntroService({
      data : this.inputData
    });
    introApp.start();
  }
}
