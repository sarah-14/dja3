music1 = "music.mp3"
music2 = "music2.mp3"
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup()
{
    canvas = createCanvas(500, 450);
canvas.position(200, 150);

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


song = "";

function preload()
{
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX + "leftWristY = " + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX + "rightWristY = " + rightWristY);
    }
    
}

function modelLoaded()
{
console.log("PoseNet is Initialized");
}




function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play()
}
