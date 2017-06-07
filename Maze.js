var drawScene1;
var drawScene2;
var no;
var maze2;
var maze3;
var maze4;
var trick;

var win = function(){
    background(0,0,0);
    fill(255, 0, 0);
    rect(163, 200, 85, 30);
    
    stroke(255, 255, 255);
    var r = 250;
    var b = 140;
    var g = 140;
    
    var increasingB = true;
    var increasingG = true;
    
    draw = function() {
        
        // Pen
        fill(r, b, g);
        stroke(r, b, g);
        if (b === 230) {
            increasingB = false;
        } else if (b === 100) {
            increasingB = true;
        }
        
        if (g === 220) {
            increasingG = false;
        } else if (g === 100) {
            increasingG = true;
        }
        
        if (increasingB) {
            b++;
        } else {
            b--;
        }
        
        if (increasingG) {
            g ++;
        } else {
            g --;
        }
        ellipse(mouseX, mouseY, 10, 10);
        
        text("You've Won!", 150,150);
        fill(255, 255, 255);
        textSize(16);
        text("Home", 170, 222); 
        mouseClicked = function() {
          if (mouseX > 170 && mouseX < 230 && mouseY > 200 && mouseY < 230){
            drawScene1();
          } 
        };
    };
}; 

// First Maze: Swirly Maze
drawScene2 = function(){
    background(255, 255, 255);
    noStroke();
    fill(0, 0, 0);
    for(var i=0 ; i<3; i++) {
        rect(50*i ,50*i,25,400 - 75*i);
        rect(50*i,50*i,400 - 100 * i,25);
        rect(375 - 50*i, 50*i,25,400 - 100*i);
        rect(50 + 50 * i,375 - 50 * i, 400 - 150 * i,25);
    }
    rect(250, 275,25,25);
    fill(255, 0, 0);
    text("   Get to the\nPurple Square!", 150,200);
    
    //End Goal
    fill (143, 21, 143);
    rect(25,375,25,25);
    
    stroke(255, 255, 255);
    var r = 250;
    var b = 140;
    var g = 140;
    
    var increasingB = true;
    var increasingG = true;
    
    //Where You Can't Touch
    draw = function() {
        
    // Pen
        fill(r, b, g);
        stroke(r, b, g);
        if (b === 230) {
            increasingB = false;
        } else if (b === 100) {
            increasingB = true;
        }
        
        if (g === 220) {
            increasingG = false;
        } else if (g === 100) {
            increasingG = true;
        }
        
        if (increasingB) {
            b++;
        } else {
            b--;
        }
        
        if (increasingG) {
            g ++;
        } else {
            g --;
        }
        ellipse(mouseX, mouseY, 10, 10);
        
        
        // Edges
        if (mouseX <= 25 || mouseY<= 25 || mouseX > 375 || (mouseY >= 375 && mouseX >= 50) ){
              no();
        } 
        // Second Left
        else if (mouseX >= 50 && mouseX <= 75){
            if (mouseY <= 50 && mouseY >=25){
            }else {
              no();  
            }    
        }
        // Second Top
        else if (mouseY >= 50 && mouseY <= 75){
            if (mouseX >= 50 && mouseX <= 350){
               no(); 
            }    
        }
        // Second Right
        else if (mouseX >= 325 && mouseX <= 350){
            if ((mouseY <= 50 && mouseY >=25) || (mouseY <= 375 && mouseY >= 350)){
            }else {
              no();  
            } 
        } 
        //Second Bottom
        else if (mouseY >= 325 && mouseY <= 350){
             if (mouseX >= 100 && mouseX <= 350){
                 no();
             }
        } 
        // Third Left
        else if (mouseX >= 100 && mouseX <= 125){
            if (mouseY <= 350 && mouseY >= 100){
                no();
            }    
        }
        // Third Top
        else if (mouseY >= 100 && mouseY <= 125){
            if (mouseX >= 100 && mouseX <= 300){
               no(); 
            }    
        }
        // Third Right
        else if (mouseX >= 275 && mouseX <= 300){
            if (mouseY >= 100 && mouseY <= 300){
              no();  
            } 
        }
        // Third Bottom
        else if (mouseY >= 275 && mouseY <= 300){
             if (mouseX >= 150 && mouseX <= 300){
                 no();
             } 
        }
        
        // Finish
        if (mouseX >= 25 && mouseX <= 50 && mouseY >= 375){
            maze2();
        }
    };
    
};

// Leaderboard
/*var drawScene3 = function(){
    background(80,80,80);
    noStroke();
    var y = 0;
    frameRate(140);
    
    draw = function() {
        image(getImage("avatars/avatar-team"),0,y,400,0);
         y = y+ 1;
    
        fill(200,250,200);
        rect (25,25,350,350);
        fill(38, 59, 163);
        textSize(33);
        var f5 = createFont("fantasy", 20);
        textFont(f5, 37);
        text("LeaderBoard", 85,71);
        fill(247, 180, 22);
        rect(20, 20, 50, 30);
        fill(38, 59, 163);
        rect(75, 150, 135, 100);
        textSize(18);
        stroke(0, 0, 0);
        text("Back", 25, 40);
        mouseClicked = function(){
            if (mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 50){
                drawScene1();
            }    
        };    
    }; 
};*/

// Cat Maze
maze2 = function(){
    background(255, 206, 82);
    noStroke();
    
    //white outside lining
    fill(255, 255, 255);
    ellipse(200, 219, 330, 262);
    triangle(48, 63, 231, 126, 48, 239);
    triangle(350, 63, 216, 106, 350, 237);
    //entrance
    rect(25, 307, 25, 93);
    rect(25, 307, 95, 25);
    //exit
    rect(348, 0, 20, 80);
    
    //purple face and ears
    fill(255, 206, 82);
    //inner face ellipse
    ellipse(200, 219, 288, 218);
    //inner ears
    triangle(68, 90, 185, 130, 68, 243);
    triangle(328, 90, 226, 129, 328, 232);
    rect(324, 84, 30, 55);
    
    //white eyes and nose
    fill(255, 255, 255);
    //eyes
    ellipse(130, 200, 20, 20);
    ellipse(270, 200, 20, 20);
    //whisker dots
    ellipse(130, 250, 4, 4);
    ellipse(115, 241, 4, 4);
    ellipse(133, 231, 4, 4);
    ellipse(278, 251, 4, 4);
    ellipse(264, 233, 4, 4);
    ellipse(289, 235, 4, 4);
    //nose
    triangle(200, 230, 230, 209, 170, 209);
    //mouth
    stroke(255, 255, 255);
    fill(255, 206, 82);
    arc(162, 219, 82, 99, 20, 99);
    arc(239, 214, 82, 99, 75, 155);
    
    // Goal
    fill (143, 21, 143);
    noStroke();
    rect(348,0,19,20);
    
     stroke(255, 255, 255);
    var r = 250;
    var b = 140;
    var g = 140;
    
    var increasingB = true;
    var increasingG = true;
    
    //areas to avoid drawing in
    draw = function() {
        
        // Pen
        fill(r, b, g);
        stroke(r, b, g);
        if (b === 230) {
            increasingB = false;
        } else if (b === 100) {
            increasingB = true;
        }
        
        if (g === 220) {
            increasingG = false;
        } else if (g === 100) {
            increasingG = true;
        }
        
        if (increasingB) {
            b++;
        } else {
            b--;
        }
        
        if (increasingG) {
            g ++;
        } else {
            g --;
        }
        ellipse(mouseX, mouseY, 10, 10);
        
        var yInsideEllipse = sqrt(109*109*(1-pow((mouseX-200), 2)/144/144));  
        var yOutsideEllipse = sqrt(pow(131, 2)*(1-pow((mouseX-200),2)/165/165));
        var yEarLeftOuterInsideLine = 21/61*(mouseX - 48) + 63;
        var yEarRightOuterInsideLine = -43/134*(mouseX - 350) + 63;
        var yEarLeftInnerInsideLine = 40/117*(mouseX - 68) + 90;
        var yEarRightInnerInsideLine = -13/34*(mouseX - 328) + 90;
    
        //left side with nothing
        if (mouseX < 35 && mouseY < 307 ) {
             no();
        } else if (mouseX < 25 && mouseY >= 307) {
             no();
        }
        //right side with nothing
        else if (mouseX >= 365 && mouseY > 80) {
             no();
        } 
        //area to right of the exit
        else if (mouseX > 368 && mouseY <= 80) { 
            no();
        }
        //inside the circle
        else if(mouseX >= 56 && mouseX <= 344) {
            if(mouseY >= (219 - yInsideEllipse) && mouseY <= (219 + yInsideEllipse)) {
                no();
            }
        } 
        
        //outside of bottom half of ellipse
        if(mouseY >= 200) {
            //rectangle underneath the entrance: rect(50, 332, 66, 90);
            if(mouseX > 50 && mouseX <= 118 && mouseY >= 332) {
                no();
            } 
            //area outside the bottom ellipse from x(25, 76), above the entrance
            else if(mouseX >= 25 && mouseX <= 76 && mouseY < 307) {
                if(mouseY >= (219 + yOutsideEllipse)) {
                    no();
                }
            } 
            //area outside the bottom half of ellipse from x(118, 307)
            else if(mouseX > 118 && mouseX <= 307) { 
                if (mouseY >= (219 + yOutsideEllipse)) {
                     no();
                }
            }
        } 
        
        // top half of ellipse
        if (mouseY < 200) {
            //area outside of the top half ellipse for x(35,48) (left of the left ear) and x (143,251) (between the ears)
            if ((mouseX >= 35 && mouseX <= 48) || (mouseX >= 143 && mouseX <= 251)) {
                if(mouseY <= (219 - yOutsideEllipse)) {
                    no();
                }
            } 
            //area outside of ellipse below the exit)
            else if (mouseX >= 328 && mouseX <= 365 && mouseY > 80) {
                if (mouseY <= (219 - yOutsideEllipse)) {
                    no();
                }
            }
            //area above outer left ear
            else if (mouseX > 48 && mouseX <143) {
                if(mouseY < yEarLeftOuterInsideLine) {
                    no();
                }
            }
            //area above outer right ear
            else if (mouseX > 251 && mouseX < 350) {
                if(mouseY < yEarRightOuterInsideLine) {
                    no();
                }
            }
        }
        
        //area in left ear
        if (mouseX > 68 && mouseX < 150 && mouseY > yEarLeftInnerInsideLine && mouseY < 219) {
                no();
            }
            
        //area in right ear
        if (mouseX > 255 && mouseX < 328 && mouseY > yEarRightInnerInsideLine && mouseY < 219) {
                no();
            }
            
        //checks you you have reached the end
        if (mouseX >= 348 && mouseX <= 368 && mouseY <= 19) {
            maze3();
        }
    };
};

// Julia's Maze
maze3 = function(){
    background(0, 162, 255);
    noStroke();
    
    stroke(255, 255, 255);
    var r = 250;
    var b = 140;
    var g = 140;
    
    var increasingB = true;
    var increasingG = true;
    
    fill(255, 255, 255);
    // Draws Maze
    //first pipe
    rect(55,0,20,50);
    arc(55, 50, 40, 40, 1, 90);
    rect(25,50,30,20);
    arc(25,70,40,40,180,270);
    //second pipe
    rect(5,70, 20, 50);
    arc(25,120,40,40,90,180);
    rect(25,120,40,20);
    arc(65,140,40,40,270,360);
    //third pipe
    rect(65,140,20,50);
    arc(65,190,40,40,0,90);
    rect(16,190,50,20);
    arc(20,210,30,40,180,270);
    //fourth pipe
    rect(5,210,20,50);
    arc(25,260,40,40,90,180);
    rect(25,260,50,20);
    arc(74,280,40,40,270,360);
    rect(75,280, 20,50);
    arc(95,330,40,40,90,180);
    //start of zigzag
    rect(95,330,90,20);
    //bottom zigzag
    beginShape(QUADS);
    vertex(185,349);
    vertex(186,315);
    vertex(108, 203);
    vertex(110,238);
    endShape();
    
    rect(109,202,94,20);
    
    //top zigzag
    beginShape(QUADS);
    vertex(204,223);
    vertex(202,183);
    vertex(105, 74);
    vertex(106,115);
    endShape();
    
    rect(105,70,93,24);
    rect(174,20,24,50);
    rect(180,20,74,20);
    rect(254,20,20,332);
    rect(273,332,82,20);
    rect(354,0,20,352);

    fill (143, 21, 143);
    noStroke();
    // Goal
    rect(55,0,20,20);
    
    draw = function() {
        
        // Pen
        fill(r, b, g);
        stroke(r, b, g);
        if (b === 230) {
            increasingB = false;
        } else if (b === 100) {
            increasingB = true;
        }
        
        if (g === 220) {
            increasingG = false;
        } else if (g === 100) {
            increasingG = true;
        }
        
        if (increasingB) {
            b++;
        } else {
            b--;
        }
        
        if (increasingG) {
            g ++;
        } else {
            g --;
        }
        ellipse(mouseX, mouseY, 10, 10);
        
        //first pipe
        if (mouseX < 55 && mouseY < 50){
            no();
        }
        //third pipe
        else if (mouseX < 65 && mouseY < 190 && mouseY > 140){
            no();
        }
        //fifth pipe
        else if(mouseX < 75 && mouseY > 280){
            no();
        }
        //second pipe
        else if (mouseX > 25 && mouseX < 105 && mouseY > 70 && mouseY < 120){
            no();
        }
        //fourth pipe
        else if (mouseX > 25 && mouseX < 105 && mouseY > 210 && mouseY < 260){
            no();
        }
        //bottom
        else if (mouseX > 75 && mouseY > 352){
            no();
        }
        //top
        else if (mouseX > 75 && mouseX < 174 && mouseY < 70){
            no();
        }
        //tiny top
        else if (mouseX > 75 && mouseX < 274 && mouseY < 20){
            no();
        }
        // first straight
        else if (mouseX > 198 && mouseX < 254 && mouseY > 40){
            no();
        }
        else if (mouseX > 274 && mouseX < 354 && mouseY < 332){
            no();
        }
        else if (mouseX > 374){
            no();
        }  
        if (mouseX >= 55 && mouseX <= 72 && mouseY <= 20){
        maze4();
        }
    };
    
};

// Trick for 4th maze
trick = function(){
    background(255, 0, 255);
    fill(255, 0, 0);
    rect(163, 200, 60, 30);
    draw = function() {
        text("       You got Tricked! oof.", 119, 135);
        fill(255, 255, 255);
        textSize(16);
        text("NEXT", 170, 222); 
        mouseClicked = function() {
          if (mouseX > 163 && mouseX < 230 && mouseY > 200 && mouseY < 230){
            no();
          } 
        };
         image(getImage("avatars/marcimus-purple"),300,300);
    };
};

// Mouse Maze
maze4 = function(){
    background(125, 255, 102);
    noStroke(); 
    
    // White shapes for the lines
    fill(255, 255, 255);
    rect(50, 100, 300, 250);
    // Ears
    rect(50, 0, 28, 100);
    rect(322, 0, 28, 100);
    
    // Shapes for filling in the face w/ green
    fill(125, 255, 102);
    rect(78, 128, 244, 194);
    
    // Face (eyes + nose + mouth)
    fill(0, 0, 0);
    //eyes
    ellipse(130, 200, 20, 20);
    ellipse(270, 200, 20, 20);
    //dots on the face
    ellipse(130, 250, 4, 4);
    ellipse(115, 241, 4, 4);
    ellipse(133, 231, 4, 4);
    ellipse(278, 251, 4, 4);
    ellipse(264, 233, 4, 4);
    ellipse(289, 235, 4, 4);
    //nose
    triangle(200, 230, 230, 209, 170, 209);
    //mouth
    stroke(0, 0, 0);
    fill(125, 255, 102);
    arc(162, 219, 82, 99, 20, 99);
    arc(239, 214, 82, 99, 75, 155);
    
    // Goal
    noStroke();
    fill (143, 21, 143);
    rect(322,0,28,28);
    
    // Pen stuff
    stroke(255, 255, 255);
    var r = 250;
    var b = 140;
    var g = 140;
    
    var increasingB = true;
    var increasingG = true;
    
    draw = function() {
        // Pen
        fill(r, b, g);
        stroke(r, b, g);
        if (b === 230) {
            increasingB = false;
        } else if (b === 100) {
            increasingB = true;
        }
        
        if (g === 220) {
            increasingG = false;
        } else if (g === 100) {
            increasingG = true;
        }
        
        if (increasingB) {
            b++;
        } else {
            b--;
        }
        
        if (increasingG) {
            g ++;
        } else {
            g --;
        }
        ellipse(mouseX, mouseY, 10, 10);
        
        // Can't Touch this
       if (mouseX <= 50 || mouseX >= 350 || mouseY >= 350){
            no();
        } else if (mouseX >= 78 && mouseX <= 322){
            if (mouseY >= 128 && mouseY <= 322 || mouseY <= 100){
                no();
            }
        } 
        
        if (mouseY >= 100 && mouseY <= 128){
            if (mouseX <= 270 && mouseX >= 138){
             // Tricked
            trick();
            }    
        }
        
        // Win
        if (mouseX >= 322 && mouseX <= 350){
            if (mouseY <= 28){
                win();
            }    
        }    
    };
};    

// Everything Together
drawScene1 = function(){
    background(89, 230, 235);
    fill(224, 179, 74);
    rect(170, 200, 60, 30);
    textSize(35);
    textFont("monospace");
    text("Drawing Maze Game", 43, 106);
    fill(255, 0, 13);
    textSize(12);
    text("*Press Start to Begin*", 148, 261);
    fill(255, 0, 0);
    draw = function() {
        textSize(16);
        fill(255, 0, 196);
        text("START", 176, 221);  
        /*rect(135, 250, 135, 30);
        textSize(16);
        fill(56, 148, 240);
        text("LEADERBOARD", 138, 269);*/
        mouseClicked = function() {
          /*if (mouseX > 135 && mouseX < 270 && mouseY > 250 && mouseY < 280){
            drawScene3();
          }
          else*/ if (mouseX > 163 && mouseX < 230 && mouseY > 200 && mouseY < 230){
            drawScene2();
          } 
        };
    };
};

// Restart Function
no = function(){
    background(0, 0, 0);
    fill(255, 0, 0);
    rect(163, 200, 85, 30);
    draw = function() {
        text("       Too bad, So sad. \nRestart from the Beginning.", 119, 135);
        fill(255, 255, 255);
        textSize(16);
        text("RESTART", 170, 222); 
        mouseClicked = function() {
          if (mouseX > 163 && mouseX < 248 && mouseY > 200 && mouseY < 230){
            drawScene2();
          } 
        };
    };
};

drawScene1();