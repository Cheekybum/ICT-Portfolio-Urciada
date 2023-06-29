function load(){
  document.body.addEventListener("scrollwheel", zoomShortcut); //add the event
}

function zoom(e){
  if(e.ctrlKey){            //[ctrl] pressed?
    event.preventDefault();  //prevent zoom
    if(e.zoom<100){        //scrolling up?
                            //do something..
      return false;
    }
    if(e.zoom>100){        //scrolling down?
                            //do something..
      return false;
    }
  }
}

view.on("mouse-wheel", function(event){
  event.stopPropagation();
});