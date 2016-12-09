function test() {
	alert("TEST");
}

setInterval(test, 30000);

var mainloop = function() {
  //test();
};

var animFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  window.oRequestAnimationFrame      ||
  window.msRequestAnimationFrame     ||
  null ;

if ( animFrame !== null ) {
  var recursiveAnim = function() {
    mainloop();
    animFrame( recursiveAnim );
  };

  // start the mainloop
	animFrame( recursiveAnim );
} else {
  var ONE_FRAME_TIME = 1000.0 / 60.0 ;
  setInterval( mainloop, ONE_FRAME_TIME );
}