var elem = document.getElementById('spotlight'),
    canTouch = !!('ontouchstart' in window);


if(canTouch){
  document.body.addEventListener('touchmove', onTouchStart, false);
  document.body.addEventListener('touchstart', onTouchStart, false);
}else{
  document.body.addEventListener('mousemove', onMoseMove, false);
}

function onTouchStart(e){
  var target = e.targetTouches[0];
  elem.style.backgroundImage  = '-webkit-radial-gradient(' + target.pageX + 'px ' + target.pageY + 'px, circle cover, rgba(0,0,0,0.2) 5%, rgba(0,0,0,1) 25%)';
}

function onMoseMove(e) {
    elem.style.backgroundImage  = '-webkit-radial-gradient(' + e.pageX + 'px ' + e.pageY + 'px, circle cover, rgba(0,0,0,0.2) 5%, rgba(0,0,0,1) 25%)';
}