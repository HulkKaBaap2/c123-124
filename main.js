function setup(){
    video=createCapture(VIDEO);
    video.size(550,480);
    video.position(40,90)


    canvas = createCanvas(550,480);
canvas.position(1060,90);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}


function draw(){
    background('#8B0000')
}


function modelLoaded (){
    console.log('PoseNet Is Initialized!');
}



function gotPoses (results){
    if(results.length>0){
        console.log (results);
    }
}