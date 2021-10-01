Song=""
leftWrist_x=""
leftWrist_y=""
rightWrist_x=""
rightWrist_y=""
leftWrist_score=""
function preload() {
Song=loadSound("music.mp3")    
}
function setup() {
    canvas=createCanvas(600,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    Posenet=ml5.poseNet(video,model_loaded)
    Posenet.on("pose",getPoses)
}
function model_loaded() {
    console.log("model is loaded!")
}
function play() {
    Song.play()
    Song.setVolume(1)
    Song.rate(1)
}
function pause() {
    Song.pause()
}
function stop() {
    Song.stop()
}
function getPoses(Results) {
    if (Results.length>0) {
        console.log(Results)
        leftWrist_x=Results[0].pose.leftWrist.x
        leftWrist_y=Results[0].pose.leftWrist.y
        rightWrist_x=Results[0].pose.rightWrist.x
        rightWrist_y=Results[0].pose.rightWrist.y
        console.log(leftWrist_x,leftWrist_y,rightWrist_x,rightWrist_y)
         leftWrist_score=Results[0].pose.keypoints[9].score
         console.log(leftWrist_score)
    }
}
function draw() {
    image(video,0,0,600,500)
    fill("red")
    stroke("orange")
    if (leftWrist_score>0.2) {
        circle(leftWrist_x,leftWrist_y,20)
    leftWrist_y_number=Number(leftWrist_y)
    removeDecimals=floor(leftWrist_y_number)
    volume=removeDecimals/500
    Song.setVolume(volume)
    document.getElementById("volume").innerHTML="Volume-" + volume
    }
}