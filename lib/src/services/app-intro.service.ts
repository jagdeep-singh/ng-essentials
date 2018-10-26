declare var $ : any;
declare var document : any;
export class AppIntroService {

  private activeIndex : any = -1;
  private dataJson : any;

  constructor(config : any){
    config.data.forEach((obj : any)=>{
      if(obj.selectorPosition != null){
        obj.selector = $(obj.selector)[obj.selectorPosition]
      }
    });
    this.dataJson = config.data;
  }

  start(){
    if(!this.dataJson){
      console.info("Data is not provided.");
      return;
    }
    this.destroy();
    $("body").append(this.getHtmlRelatedToThisIntro());
    this.bindActions();
    this.moveToNext();
  }

  bindActions(){
    document.getElementById("next_btn").addEventListener("click", ()=>{
      this.moveToNext();
    });
    document.getElementById("prev_btn").addEventListener("click", ()=>{
      this.moveToPrevious();
    });

    document.getElementById("done_btn").addEventListener("click", ()=>{
      this.destroy();
    });

    document.getElementsByClassName("teach_app_backdrop")[0].addEventListener("click", ()=>{
      this.destroy();
    });

    window.addEventListener("resize", ()=>{
      this.refresh();
    });
  }

  destroy(){
    this.beforeMoveInterceptor();
    $(".teach_app_container").remove();
  }

  validate(){
    if(this.activeIndex == -1 && this.activeIndex == null){
      return false;
    }
    else if(this.activeIndex < 0 || this.activeIndex >= this.dataJson.length){
      return false;
    }
    else{
      return true;
    }
  }

  beforeMoveInterceptor(){
    if(!this.validate()){
      return;
    }
    let obj = this.dataJson[this.activeIndex];
    let elem = $(obj.selector);
    $(elem).removeClass("teach_app_active_elem");
  }

  moveToNext(){
    this.beforeMoveInterceptor();
    this.activeIndex++;
    this.inItMsgObj(this.dataJson[this.activeIndex]);
  }

  moveToPrevious(){
    this.beforeMoveInterceptor();
    this.activeIndex--;
    this.inItMsgObj(this.dataJson[this.activeIndex]);
  }

  moveStepInterceptor(){
    $("#arrow_pointer").removeClass("arrow-left");
    $("#arrow_pointer").removeClass("arrow-right");
    $("#arrow_pointer").removeClass("arrow-top");
    $("#arrow_pointer").removeClass("arrow-bottom");
    $(".teach_app_msg_container").css({
      'left' : 'auto',
      'right' : 'auto',
      'top' : 'auto',
      'bottom' : 'auto'
    });
    $("#next_btn").hide();
    $("#prev_btn").hide();
    $("#done_btn").hide();
    if(this.activeIndex == 0){
      if(this.dataJson.length == 1){
        $("#done_btn").show();
      }
      else{
        $("#next_btn").show();
      }
    }
    else if(this.activeIndex >= this.dataJson.length-1){
      $("#prev_btn").show();
      $("#done_btn").show();
    }
    else{
      $("#next_btn").show();
      $("#prev_btn").show();
    }
  }

  refresh(){
    this.inItMsgObj(this.dataJson[this.activeIndex]);
  }

  inItMsgObj(data : any){
    this.moveStepInterceptor();
    $("#message_display").html(data.message);
    if(!data.selector){
      this.showInfoMsg();
      return;
    }
    this.highlightSelector(data.selector);
    switch (data.position){
      case "left" :
        this.showMsgOnLeft(data.selector);
        break;
      case "top" :
        this.showMsgOnTop(data.selector);
        break;
      case "right" :
        this.showMsgOnRight(data.selector);
        break;
      case "bottom" :
        this.showMsgOnBottom(data.selector);
        break;
    }
  }

  showInfoMsg(){
    $(".teach_app_elem_container").css({
      'height' : 0,
      'width' : 0,
      'left' : 0,
      'top' : 0
    });
    let msgElem = $(".teach_app_msg_container");
    msgElem.css({
      'display' : 'block',
      'left' : (window.innerWidth/2)-(msgElem.innerWidth()/2),
      'top' : (window.innerHeight/2)-(msgElem.innerHeight()/2),
      'right' : 'auto',
      'bottom' : 'auto'
    });
  }

  showMsgOnLeft(selector : any){
    let msgElem = $(".teach_app_msg_container");
    let elemWidth = msgElem.innerWidth();
    $("#arrow_pointer").addClass("arrow-right");
    msgElem.css({
      'display' : 'block',
      'left' : -(elemWidth+15),
      'top' : 'auto',
      'right' : 'auto',
      'bottom' : 'auto'
    });
  }

  showMsgOnTop(selector : any){
    let msgElem = $(".teach_app_msg_container");
    let elemHeight = msgElem.innerHeight();
    $("#arrow_pointer").addClass("arrow-bottom");
    msgElem.css({
      'display' : 'block',
      'top' : -(elemHeight+15),
      'left' : 'auto',
      'right' : 'auto',
      'bottom' : 'auto'
    });
  }

  showMsgOnBottom(selector : any){
    let msgElem = $(".teach_app_msg_container");
    $("#arrow_pointer").addClass("arrow-top");
    let elemHeight = $(selector).innerHeight();
    msgElem.css({
      'display' : 'block',
      'top' : (elemHeight+25),
      'left' : 'auto',
      'right' : 'auto',
      'bottom' : 'auto'
    });
  }

  showMsgOnRight(selector : any){
    let msgElem = $(".teach_app_msg_container");
    let elemWidth = $(selector).innerWidth();
    $("#arrow_pointer").addClass("arrow-left");
    msgElem.css({
      'display' : 'block',
      'left' : (elemWidth+25),
      'top' : 'auto',
      'right' : 'auto',
      'bottom' : 'auto'
    });
  }

  highlightSelector(selector : any){
    let elem = $(selector);
    let offset = elem.offset();
    let position = elem.position();
    let elemHeight = elem.innerHeight();
    let elemWidth = elem.innerWidth();
    $(".teach_app_elem_container").css({
      'height' : elemHeight+10,
      'width' : elemWidth+10,
      'left' : offset.left-5,
      'top' : offset.top-5
    });
    $(selector).addClass("teach_app_active_elem");
  }

  getHtmlRelatedToThisIntro(){
    return `
      <div class="teach_app_container">
        <div class="teach_app_backdrop"></div>
        <div class="teach_app_elem_container">
          <div class="teach_app_msg_container">
            <div id="message_display"></div>
            <div class="teach_app_actions">
              <a id="prev_btn" class="btn btn-link">Prev</a>
              <a id="next_btn" class="btn btn-link">Next</a>
              <a id="done_btn" class="btn btn-link">Done</a>
            </div>
            <div id="arrow_pointer"></div>
          </div>
        </div>
      </div>
    `;
  }

}
