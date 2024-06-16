song1="";
song2="";

song1_status="";
song2_status="";

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("PEPAS.mp3");
}

function setup(){
    canvas=createCanvas(500,600);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('model is loaded');
}

function draw(){
    image(video, 0, 0, 500, 600);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}