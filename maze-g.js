var myObstacles = [];
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 1500;
      this.canvas.height = 700;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
      clearInterval(this.interval);
    }
  }
  
  function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.width, this.height);
    }
    }
    this.crashWith = function(otherobj) {
      var myleft = this.x;
      var myright = this.x + (this.width);
      var mytop = this.y;
      var mybottom = this.y + (this.height);
      var otherleft = otherobj.x;
      var otherright = otherobj.x + (otherobj.width);
      var othertop = otherobj.y;
      var otherbottom = otherobj.y + (otherobj.height);
      var crash = true;
      if ((mybottom < othertop) ||
      (mytop > otherbottom) ||
      (myright < otherleft) ||
      (myleft > otherright)) {
        crash = false;
      }
      return crash;
    }
  
  
  function updateGameArea() {
    if (myGamePiece.crashWith(myObstacle)) {
      myGameArea.stop();
    } else {
      myGameArea.clear();
      myObstacle.update();
      myGamePiece.newPos();
      myGamePiece.update();
    }
  }<script src="index.js"></script>