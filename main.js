Song=""
leftWrist_x=""
leftWrist_y=""
rightWrist_x=""
rightWrist_y=""
function preload() {
Song=loadSound("music.mp3")    
}
function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    Posenet=ml5.poseNet(video,model_loaded)
    Posenet.on("pose",getPoses)
}
function model_loaded() {
    console.log("model is loaded!")
}
function draw() {
    image(video,0,0,300,300)
}
function play() {
    Song.play()
    Song.setVolume(0.5)
    Song.rate(2.5)
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
    }
}