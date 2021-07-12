// // Create an array to store our particles
// var particles = [];

// // The amount of particles to render
// var particleCount = 30;

// // The maximum velocity in each direction
// var maxVelocity = 2;

// // The target frames per second (how often do we want to update / redraw the scene)
// var targetFPS = 33;

// // Set the dimensions of the canvas as variables so they can be used.
// var canvasWidth = 400;
// var canvasHeight = 400;

// // Create an image object (only need one instance)
// var imageObj = new Image();

// // Once the image has been downloaded then set the image on all of the particles
// imageObj.onload = function () {
//   particles.forEach(function (particle) {
//     particle.setImage(imageObj);
//   });
// };

// // Once the callback is arranged then set the source of the image
// imageObj.src =
//   "http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png";

// // A function to create a particle object.
// function Particle(context) {
//   // Set the initial x and y positions
//   this.x = 0;
//   this.y = 0;

//   // Set the initial velocity
//   this.xVelocity = 0;
//   this.yVelocity = 0;

//   // Set the radius
//   this.radius = 5;

//   // Store the context which will be used to draw the particle
//   this.context = context;

//   // The function to draw the particle on the canvas.
//   this.draw = function () {
//     // If an image is set draw it
//     if (this.image) {
//       this.context.drawImage(this.image, this.x - 128, this.y - 128);
//       // If the image is being rendered do not draw the circle so break out of the draw function
//       return;
//     }
//     // Draw the circle as before, with the addition of using the position and the radius from this object.
//     this.context.beginPath();
//     this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
//     this.context.fillStyle = "rgba(0, 255, 255, 1)";
//     this.context.fill();
//     this.context.closePath();
//   };

//   // Update the particle.
//   this.update = function () {
//     // Update the position of the particle with the addition of the velocity.
//     this.x += this.xVelocity;
//     this.y += this.yVelocity;

//     // Check if has crossed the right edge
//     if (this.x >= canvasWidth) {
//       this.xVelocity = -this.xVelocity;
//       this.x = canvasWidth;
//     }
//     // Check if has crossed the left edge
//     else if (this.x <= 0) {
//       this.xVelocity = -this.xVelocity;
//       this.x = 0;
//     }

//     // Check if has crossed the bottom edge
//     if (this.y >= canvasHeight) {
//       this.yVelocity = -this.yVelocity;
//       this.y = canvasHeight;
//     }

//     // Check if has crossed the top edge
//     else if (this.y <= 0) {
//       this.yVelocity = -this.yVelocity;
//       this.y = 0;
//     }
//   };

//   // A function to set the position of the particle.
//   this.setPosition = function (x, y) {
//     this.x = x;
//     this.y = y;
//   };

//   // Function to set the velocity.
//   this.setVelocity = function (x, y) {
//     this.xVelocity = x;
//     this.yVelocity = y;
//   };

//   this.setImage = function (image) {
//     this.image = image;
//   };
// }

// // A function to generate a random number between 2 values
// function generateRandom(min, max) {
//   return Math.random() * (max - min) + min;
// }

// // The canvas context if it is defined.
// var context;

// // Initialise the scene and set the context if possible
// function init() {
//   var canvas = document.getElementById("myCanvas");
//   if (canvas.getContext) {
//     // Set the context variable so it can be re-used
//     context = canvas.getContext("2d");

//     // Create the particles and set their initial positions and velocities
//     for (var i = 0; i < particleCount; ++i) {
//       var particle = new Particle(context);

//       // Set the position to be inside the canvas bounds
//       particle.setPosition(
//         generateRandom(0, canvasWidth),
//         generateRandom(0, canvasHeight)
//       );

//       // Set the initial velocity to be either random and either negative or positive
//       particle.setVelocity(
//         generateRandom(-maxVelocity, maxVelocity),
//         generateRandom(-maxVelocity, maxVelocity)
//       );
//       particles.push(particle);
//     }
//   } else {
//     alert("Please use a modern browser");
//   }
// }

// // The function to draw the scene
// function draw() {
//   // Clear the drawing surface and fill it with a black background
//   context.fillStyle = "rgba(0, 0, 0, 0.5)";
//   context.fillRect(0, 0, 0, 0);

//   // Go through all of the particles and draw them.
//   particles.forEach(function (particle) {
//     particle.draw();
//   });
// }

// // Update the scene
// function update() {
//   particles.forEach(function (particle) {
//     particle.update();
//   });
// }

// // Initialize the scene
// init();

// // If the context is set then we can draw the scene (if not then the browser does not support canvas)
// if (context) {
//   setInterval(function () {
//     // Update the scene befoe drawing
//     update();

//     // Draw the scene
//     draw();
//   }, 1000 / targetFPS);
// }

var smokemachine = function (context, color) {
  color = color || [24, 46.8, 48.2];
  var polyfillAnimFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  var lastframe;
  var currentparticles = [];
  var pendingparticles = [];

  var buffer = document.createElement("canvas"),
    bctx = buffer.getContext("2d");

  buffer.width = 20;
  buffer.height = 20;

  var opacities = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 3, 5, 5, 7, 4, 4, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 17, 27, 41, 52,
    56, 34, 23, 15, 11, 4, 9, 5, 1, 0, 0, 0, 0, 0, 0, 1, 45, 63, 57, 45, 78, 66,
    52, 41, 34, 37, 23, 20, 0, 1, 0, 0, 0, 0, 1, 43, 62, 66, 64, 67, 115, 112,
    114, 56, 58, 47, 33, 18, 12, 10, 0, 0, 0, 0, 39, 50, 63, 76, 87, 107, 105,
    112, 128, 104, 69, 64, 29, 18, 21, 15, 0, 0, 0, 7, 42, 52, 85, 91, 103, 126,
    153, 128, 124, 82, 57, 52, 52, 24, 1, 0, 0, 0, 2, 17, 41, 67, 84, 100, 122,
    136, 159, 127, 78, 69, 60, 50, 47, 25, 7, 1, 0, 0, 0, 34, 33, 66, 82, 113,
    138, 149, 168, 175, 82, 142, 133, 70, 62, 41, 25, 6, 0, 0, 0, 18, 39, 55,
    113, 111, 137, 141, 139, 141, 128, 102, 130, 90, 96, 65, 37, 0, 0, 0, 2, 15,
    27, 71, 104, 129, 129, 158, 140, 154, 146, 150, 131, 92, 100, 67, 26, 3, 0,
    0, 0, 0, 46, 73, 104, 124, 145, 135, 122, 107, 120, 122, 101, 98, 96, 35,
    38, 7, 2, 0, 0, 0, 50, 58, 91, 124, 127, 139, 118, 121, 177, 156, 88, 90,
    88, 28, 43, 3, 0, 0, 0, 0, 30, 62, 68, 91, 83, 117, 89, 139, 139, 99, 105,
    77, 32, 1, 1, 0, 0, 0, 0, 0, 16, 21, 8, 45, 101, 125, 118, 87, 110, 86, 64,
    39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 28, 79, 79, 117, 122, 88, 84, 54, 46, 11,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 6, 55, 61, 68, 71, 30, 16, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 23, 25, 20, 12, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 2, 12, 9, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  var data = bctx.createImageData(20, 20);
  var d = data.data;

  for (var i = 0; i < d.length; i += 4) {
    d[i] = color[0];
    d[i + 1] = color[1];
    d[i + 2] = color[2];
    d[i + 3] = opacities[i / 4];
  }

  bctx.putImageData(data, 0, 0);

  var imagewidth = 20 * 5;
  var imageheight = 20 * 5;

  function particle(x, y, l) {
    this.x = x;
    this.y = y;
    this.age = 0;
    this.vx = (Math.random() * 8 - 4) / 100;
    this.startvy = -(Math.random() * 30 + 10) / 100;
    this.vy = this.startvy;
    this.scale = Math.random() * 0.5;
    this.lifetime = Math.random() * l + l / 2;
    this.finalscale = 5 + this.scale + Math.random();

    this.update = function (deltatime) {
      this.x += this.vx * deltatime;
      this.y += this.vy * deltatime;
      var frac = Math.pow(this.age / this.lifetime, 0.5);
      this.vy = (1 - frac) * this.startvy;
      this.age += deltatime;
      this.scale = frac * this.finalscale;
    };

    this.draw = function () {
      context.globalAlpha =
        (1 - Math.abs(1 - (2 * this.age) / this.lifetime)) / 8;
      var off = (this.scale * imagewidth) / 2;
      var xmin = this.x - off;
      var xmax = xmin + this.scale * imageheight;
      var ymin = this.y - off;
      var ymax = ymin + this.scale * imageheight;
      context.drawImage(buffer, xmin, ymin, xmax - xmin, ymax - ymin);
    };
  }

  function addparticles(x, y, n, lifetime) {
    lifetime = lifetime || 4000;
    n = n || 10;
    if (n < 1)
      return (
        Math.random() <= n &&
        pendingparticles.push(new particle(x, y, lifetime))
      );
    for (var i = 0; i < n; i++) {
      pendingparticles.push(new particle(x, y, lifetime));
    }
  }

  function updateanddrawparticles(deltatime) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    deltatime = deltatime || 16;
    var newparticles = [];
    currentparticles = currentparticles.concat(pendingparticles);
    pendingparticles = [];

    currentparticles.forEach(function (p) {
      p.update(deltatime);
      if (p.age < p.lifetime) {
        p.draw();
        newparticles.push(p);
      }
    });
    currentparticles = newparticles;
  }

  function frame(time) {
    if (running) {
      var deltat = time - lastframe;
      lastframe = time;

      updateanddrawparticles(deltat);

      polyfillAnimFrame(frame);
    }
  }

  var running = false;
  function start() {
    running = true;
    polyfillAnimFrame(function (time) {
      lastframe = time;
      polyfillAnimFrame(frame);
    });
  }

  function stop() {
    running = false;
  }

  return {
    start: start,
    stop: stop,
    step: updateanddrawparticles,
    addsmoke: addparticles,
  };
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

var party = smokemachine(ctx, [54, 16.8, 18.2]);
party.start(); // start animating

onmousemove = function (e) {
  var x = e.clientX;
  var y = e.clientY;
  var n = 0.5;
  var t = Math.floor(Math.random() * 200) + 3800;
  party.addsmoke(x, y, n, t);
};

setInterval(function () {
  party.addsmoke(innerWidth / 2, innerHeight, 1);
}, 100);
