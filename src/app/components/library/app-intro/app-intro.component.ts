import { Component } from '@angular/core';
import { AppIntroService } from 'ng-essential';
declare var $ : any;
@Component({
  selector: 'library-app-intro',
  templateUrl: './app-intro.component.html'
})
export class AppIntroComponent {

  inputData = [
    {
      message : `Hi Welcome to App-Intro. We will walk you through our features.`
    },
    {
      message : `Hey this is our library name. Hope you will like it.`,
      selector : "h1",
      position : 'bottom'
    },
    {
      message : `We tried to explain in one line but it's much more than this`,
      selector : "h3",
      position : 'top'
    },
    {
      message : `From here you can access our well maintained documentation.`,
      selector : ".btn.btn-info.btn-lg",
      selectorPosition : 0,
      position : 'left'
    },
    {
      message : `From here you have started this demo. Hope you remembered !!`,
      selector : ".btn.btn-info.btn-lg",
      selectorPosition : 1,
      position : 'left'
    },
    {
      message : `Feature : Simple fast and small. Just try once you will love it.`,
      selector : ".feature",
      selectorPosition : 0,
      position : 'top'
    },
    {
      message : `Feature : Easy to customize. Just Wish what you want to do.`,
      selector : ".feature",
      selectorPosition : 1,
      position : 'right'
    },
    {
      message : `Feature : User Interactive. Reading is boring, hmm... don't worry we will speak for you.`,
      selector : ".feature",
      selectorPosition : 2,
      position : 'bottom'
    },
    {
      message : `
        Feature : Browser compatibility. Run in any browser and out library won't let you down.
        <br/>
        <b>That's all folks. How was it ?</b>
      `,
      selector : ".feature",
      selectorPosition : 3,
      position : 'left'
    }
  ];

  ngOnInit(){
    console.log(this.inputData);
  }

  startDemo(){
    let introApp : any = new AppIntroService({
      data : this.inputData
    });
    introApp.start();
  }

}
