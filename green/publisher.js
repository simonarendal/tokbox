class Publisher {

    constructor() {
        this.r = 105;
        this.w = 200; 
        this.h = 200;
        this.x = (width/2) - 240;
        this.y = (height/2)+(240);
    }


    drawPublisher(){
      noStroke();
      fill(200,200,200);
        ellipse(this.x, this.y, this.w+20, this.h+20);
        fill(216, 69, 86);
        ellipse(this.x, this.y, this.w, this.h);
        fill(255);
        textStyle(BOLD);
        textSize(20);
        textFont('Verdana');
        text("Dit smil", this.x-50, this.y);
    }

    createCircle(step,show){
        //move 0,0 to the center of the screen
        //translate(width/2, height/2);
        let opacity; 
        if(show >= 1000/circlesPublisher.length){
          opacity = 255;
        }
        else opacity = 0;
        
        //convert polar coordinates to cartesian coordinates
        var x = this.x + this.r * sin(step);
        var y = this.y + this.r * cos(step);
        
        //draw ellipse at every x,y point
        noStroke();
        fill(101, 55, 111,opacity); 
        ellipse(x, y, 12, 12);
          
          }
 
  }
