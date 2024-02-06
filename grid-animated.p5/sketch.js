
function setup() {
  createCanvas(2900, 2400,WEBGL)
  angleMode(DEGREES)
}

function draw() {
  background(30)
  rotateX(60)
  noFill()
  stroke(1)
  translate(0, -700, 0);
  for (var i = 0; i <= 200 ;i++)
  {
    var r = map(sin(frameCount),-1,1,0,255)
    var g = map(i,0,20,100,200)
    var b = map(cos(frameCount),-1,1,255,0)
    stroke(r,g,b)
    rotate(frameCount / 50)
    beginShape()
    for(var j = 0; j <= 300;j += 60)
    {
      var rad = i * 4
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = cos(frameCount * 10 + 4 * i) * 50
      rotateY(20)
      //rotateZ(10)
      vertex(x,y,z)
    }
    endShape(CLOSE)
  }
}
