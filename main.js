Song=""
function preload() {
Song=loadSound("music.mp3")    
}
function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}
function draw() {
    image(video,0,0,300,300)
}
function play() {
    Song.play()
}
function pause() {
    Song.pause()
}
function stop() {
    Song.stop()
}