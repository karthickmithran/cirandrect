function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    
    tint_color = "";
    }
    
    function draw(){
        image(video, 0, 0, 640, 480);
        tint(tint_color);
        circle(35, 30, 50);
        circle(605, 30, 50);
        circle(35, 440, 50);
        circle(605, 440, 50);
        fill(255,0,0);
        rect(60, 25, 520, 15);
        rect(30, 55, 15, 360);
        rect(600, 55, 15, 360);
        rect(60, 430, 520, 15);
        fill(0,128,0);
        
        
    }
    
    function take_snapshot(){
        save('student_name.png')
    }
    
    function filter_tint(){
        tint_color = document.getElementById("color_name").value;
    }