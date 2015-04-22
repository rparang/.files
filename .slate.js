//--------------------------------------
//OPERATIONS
//--------------------------------------

//FIX TO WINDOW
var pushLeft = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX/2"
});
var pushRight = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX/2"
});
var pushTop = slate.operation("push", {
  "direction" : "top",
  "style" : "bar-resize:screenSizeY/2"
});
var pushDown = slate.operation("push", {
  "direction" : "down",
  //"style" : "bar-resize:screenSizeY/2"
});
var fullscreen = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});

var pushTopLeft = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX / 2",
  "height" : "screenSizeY / 2"
})

var pushBottomLeft = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY + (screenSizeY / 2)",
  "width" : "screenSizeX / 2",
  "height" : "screenSizeY / 2"
})

var pushTopRight = slate.operation("move", {
  "x" : "screenOriginX + (screenSizeX / 2)",
  "y" : "screenOriginY",
  "width" : "screenSizeX / 2",
  "height" : "screenSizeY / 2"
})

var pushBottomRight = slate.operation("move", {
  "x" : "screenOriginX + (screenSizeX / 2)",
  "y" : "screenOriginY + (screenSizeY / 2)",
  "width" : "screenSizeX / 2",
  "height" : "screenSizeY / 2"
})

// var centerWindow = {
//   "x" : "screenOriginX + (screenSizeX * 0.075)",
//   "y" : "screenOriginX + (screenSizeY * 0.075)",
//   "width" : "screenSizeX * 0.85",
//   "height" : "screenSizeY * 0.85"
// }

var center0 = slate.operation("move", {
  "screen" : "0",
  "x" : "screenOriginX+(screenSizeX * 0.075)",
  "y" : "screenOriginY+(screenSizeY * 0.075)",
  "width" : "screenSizeX * 0.75",
  "height": "screenSizeY * 0.75"
});

var center1 = slate.operation("move", {
  "screen" : "1",
  "x" : "screenOriginX+(screenSizeX * 0.075)",
  "y" : "screenOriginY+(screenSizeY * 0.075)",
  "width" : "screenSizeX * 0.75",
  "height": "screenSizeY * 0.75"
});


//NUDGE
var nudgeLeft = slate.operation("nudge", {
  "x" : "-50",
  "y" : "+0"
});

var nudgeRight = slate.operation("nudge", {
  "x" : "+50",
  "y" : "+0"
});

var nudgeTop = slate.operation("nudge", {
  "x" : "+0",
  "y" : "-50"
});

var nudgeDown = slate.operation("nudge", {
  "x" : "+0",
  "y" : "+50"
});


//THROW MONITOR
var monitor0 = slate.operation("throw", {
  "screen" : "0",
  "width" : "screenSizeX / 2",
  "height" : "screenSizeY / 2"
});

var monitor1 = slate.operation("throw", {
  "screen" : "1",
  "width" : "screenSizeX / 2",
  "height" : "screenSizeY / 2"
});

//--------------------------------------
//EVENT BINDINGS
//--------------------------------------

slate.bind("left:ctrl;alt;cmd", pushLeft);

slate.bind("right:ctrl;alt;cmd", pushRight);

slate.bind("up:ctrl;alt;cmd", pushTop);

slate.bind("down:ctrl;alt;cmd", pushDown);

slate.bind("up:shift;alt;cmd", pushTopLeft)

slate.bind("left:shift;alt;cmd", pushBottomLeft)

slate.bind("right:shift;alt;cmd", pushTopRight)

slate.bind("down:shift;alt;cmd", pushBottomRight)

slate.bind("f:ctrl;alt;cmd", fullscreen);

slate.bind("c:ctrl;alt;cmd", center0);

slate.bind("v:ctrl;alt;cmd", center1);

slate.bind("left:ctrl;cmd", nudgeLeft);

slate.bind("right:ctrl;cmd", nudgeRight);

slate.bind("up:ctrl;cmd", nudgeTop);

slate.bind("down:ctrl;cmd", nudgeDown);

slate.bind("left:ctrl;alt", monitor0);

slate.bind("right:ctrl;alt", monitor1);

slate.bind("1:ctrl", function(win) {
  //win.doOperation(fullscreen);
  var appName = win.app().name();
  if (appName === "Sublime Text 2") {
    win.doOperation(pushRight);
  }
  else if (appName === "Google Chrome") {
    win.doOperation(fullscreen); 
  }
});


// here win is a reference to the currently focused window
// slate.bind("1:ctrl", function(win) {
//   win.doOperation(fullscreen);
// });
