canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");

  nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];
   random_number = Math.floor(Math.random() * 4);
    console.log(random_number);
     rover_width = 100;
      rover_height = 90;

       background_image = nasa_mars_images_array[random_number];
        console.log("background_image = " + background_image);
         rover_image = "rover.png";

          rover_x = 10;
           rover_y = 10;

function add() {
    Background_imgTag = new Image();
    Background_imgTag.onload = uploadBackground;
    Background_imgTag.scr = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.scr = rover_image;

}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
 window.addEventListener("keydown", my_keydown);
 function my_keydown(e)
{
    keypressed = e.keydown;
    console.log (key_pressed);
     if(key_pressed == '38')
     {
        up();
        console.log("up"); 
     }
     if(key_pressed == '40');
     {
        down();
        console.log("down")
     }
     if(key_pressed == '37')
     {
        left();
        console.log("left"); 
     }
     if(key_pressed == '39');
     {
        right();
        console.log("right")
     }
}
function up() {
   if(rover_y >=0)
   {
      rover_y = rover_y -10;
      console.log("when up arrow is pressed, x ="+ rover_x + "/ y = "rover_y);
      uploadBackground();
      uploadrover();
   }
function down() {
    if(rover_y >=500)
   {
      rover_y = rover_y +10;
      console.log("when up arrow is pressed, x =" +rover_x + "/ y = "rover_y);
      uploadBackground();
      uploadrover();
      }
      function left() {
         if(rover_y >=0)
        {
           rover_y = rover_y -10;
           console.log("when up arrow is pressed, x =" rover_x + "/ y = "rover_y);
           uploadBackground();
           uploadrover();
           }
           function right() {
            if(rover_y >=700)
           {
              rover_y = rover_y +10;
              console.log("when up arrow is pressed, x =" rover_x + "/ y = "rover_y);
              uploadBackground();
              uploadrover();
              }
   }
 