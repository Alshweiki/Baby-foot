
var s2 = function( p ) {



p.setup = function() {

  var cnv = p.createCanvas(290, 250);
  cnv.position(430, 460);
  p.background('rgba(93 ,188,210, 0.25)');  
  p.textSize(20);
  
  p.text("Graphes / Statistiques" , 10, 30);
  
  if(numberOfPlyer != 0)
  {
     p.text("player:" + numberOfPlyer , 10, 60);
  }
  else
  {
    p.text("Please choose player." , 10, 60);
  }
  

}

p.draw = function() {
}


};

