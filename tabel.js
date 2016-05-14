var sketch = function( p ) {

  var img;  // Declare variable 'img'.
  //var numberOfPlyer =0 ;

  p.x;
  p.y;
  p.selected =false;
  p.tablex = 650;
  p.tabley = 335;
  

p.setup = function() {
  p.TableImage = p.loadImage("tabel.png");  
  p.BubbleImage = p.loadImage("bubble.png");
  var cnv = p.createCanvas(p.tablex, p.tabley);
  cnv.position(70, 100); 
  
}

p.draw = function() {
	
  p.image(p.TableImage, 0, 0);
  if (p.mouseIsPressed){
  	p.check(p.mouseX,p.mouseY);
  	//alert(p.mouseX+" ........... " + p.mouseY);
  }
 
  if(p.selected){
    p.image(p.BubbleImage, p.x, p.y, p.BubbleImage.width/3 , p.BubbleImage.width/3 );
  }
}

p.check = function(mouseX,mouseY)
{

  // team red
  //goal keeper
	if(mouseX > 60 && mouseX < 85 && mouseY > 155 && mouseY < 180)
	{
		p.x = 55;
  	p.y= 150;
    p.selected = true;
    numberOfPlyer = 1;
    changePlayer();
	}
  // first bar
	if(mouseX > 135 && mouseX < 150 && mouseY > 80 && mouseY < 105)
	{
		p.x = 130;
  	p.y=75;
    p.selected = true;
    numberOfPlyer = 2;
    changePlayer();
	}
  if(mouseX > 135 && mouseX < 150 && mouseY > 238 && mouseY < 255)
  {
    p.x = 130;
    p.y=233;
    p.selected = true;
    numberOfPlyer = 3;
    changePlayer();
  }
  // second bar
   if(mouseX > 280 && mouseX < 305 && mouseY > 35 && mouseY < 50)
  {
    p.x = 270;
    p.y=25;
    p.selected = true;
    numberOfPlyer = 4;
    changePlayer();
  }

    if(mouseX > 280 && mouseX < 305 && mouseY > 95 && mouseY < 110)
  {
    p.x = 270;
    p.y=85;
    p.selected = true;
    numberOfPlyer = 5;
    changePlayer();
  }
  if(mouseX > 280 && mouseX < 305 && mouseY > 155 && mouseY < 170)
  {
    p.x = 270;
    p.y=145;
    p.selected = true;
    numberOfPlyer = 6;
    changePlayer();
  }
  if(mouseX > 280 && mouseX < 305 && mouseY > 215 && mouseY < 230)
  {
    p.x = 270;
    p.y=205;
    p.selected = true;
    numberOfPlyer = 7;
    changePlayer();
  }
  if(mouseX > 280 && mouseX < 305 && mouseY > 275 && mouseY < 290)
  {
    p.x = 270;
    p.y=265;
    p.selected = true;
    numberOfPlyer = 8;
    changePlayer();
  }
  // third bar 
if(mouseX > 425 && mouseX < 445 && mouseY > 45 && mouseY < 65)
  {
    p.x = 418;
    p.y=40;
    p.selected = true;
    numberOfPlyer = 9;
    changePlayer();
  }
  if(mouseX > 425 && mouseX < 445 && mouseY > 155 && mouseY < 175)
  {
    p.x = 415;
    p.y=147;
    p.selected = true;
    numberOfPlyer = 10;
    changePlayer();
  }
  if(mouseX > 425 && mouseX < 445 && mouseY > 260 && mouseY < 280)
  {
    p.x = 415;
    p.y=253;
    p.selected = true;
    numberOfPlyer = 11;
    changePlayer();
  }






  // team plue
  //goal keeper
if(mouseX > 570 && mouseX < 585 && mouseY > 155 && mouseY < 180)
  {
    p.x = 563;
    p.y= 147;
    p.selected = true;
    numberOfPlyer = 12;
    changePlayer();
  }
   //first bar
 if(mouseX > 495 && mouseX < 515 && mouseY > 75 && mouseY < 95)
  {
    p.x = 490;
    p.y=67;
    p.selected = true;
    numberOfPlyer = 14;
    changePlayer();
  }
  if(mouseX > 495 && mouseX < 515 && mouseY > 235 && mouseY < 255)
  {
    p.x = 490;
    p.y=227;
    p.selected = true;
    numberOfPlyer = 13;
    changePlayer();
  }
  // second bar
  if(mouseX > 350 && mouseX < 370 && mouseY > 35 && mouseY < 55)
  {
    p.x = 345;
    p.y=27;
    p.selected = true;
    numberOfPlyer = 19;
    changePlayer();
  }
  if(mouseX > 350 && mouseX < 370 && mouseY > 95 && mouseY < 110)
  {
    p.x = 345;
    p.y=87;
    p.selected = true;
    numberOfPlyer = 18;
    changePlayer();
  }
  if(mouseX > 350 && mouseX < 370 && mouseY > 155 && mouseY < 170)
  {
    p.x = 345;
    p.y=147;
    p.selected = true;
    numberOfPlyer = 17;
    changePlayer();
  }
  if(mouseX > 350 && mouseX < 370 && mouseY > 215 && mouseY < 230)
  {
    p.x = 345;
    p.y=207;
    p.selected = true;
    numberOfPlyer = 16;
    changePlayer();
  }
  if(mouseX > 350 && mouseX < 370 && mouseY > 275 && mouseY < 290)
  {
    p.x = 345;
    p.y=267;
    p.selected = true;
    numberOfPlyer = 15;
    changePlayer();
  }
 


  //third bar 
  if(mouseX > 205 && mouseX < 225 && mouseY > 265 && mouseY < 290)
  {
    p.x = 200;
    p.y=260;
    p.selected = true;
    numberOfPlyer = 20;
    changePlayer();
  }
   if(mouseX > 205 && mouseX < 225 && mouseY > 160 && mouseY < 175)
  {
    p.x = 200;
    p.y=155;
    p.selected = true;
    numberOfPlyer = 21;
    changePlayer();
  }
   if(mouseX > 205 && mouseX < 225 && mouseY > 55 && mouseY < 70)
  {
    p.x = 200;
    p.y=50;
    p.selected = true;
    numberOfPlyer = 22;
    changePlayer();
  }
  

 
}

};

