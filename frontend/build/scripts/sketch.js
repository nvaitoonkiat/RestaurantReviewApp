let logimgs = [];
let images2;
let star = false;
let images = [];
var canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function preload() {
  for (let i = 0; i < 3; i++) {
    images[i] = loadImage(`img/name${i}.png`);
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  for (let i = 0; i < 8; i++) {
    let x = random(windowWidth);

    let r = random(50, 150);
    let y = i * r * 4;
    let b = new logimg(x, y, r);
    logimgs.push(b);
  }
}


function draw() {
  clear();

  for (let i = 0; i < logimgs.length; i++) {
    if (star === true) {
      logimgs[i].moveup();
      star = false;
    } else {
      logimgs[i].movedown();
      star = true;
    }

    logimgs[i].show();
  }
}

class logimg {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.kitten = random(images);
  }

  movedown() {
    this.y = this.y - 2;
  }

  moveup() {
    this.y = this.y + 2;
  }

  show() {
    image(this.kitten, this.x, this.y, this.r, this.r * 7);
  }
}

