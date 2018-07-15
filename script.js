    //--------------------
      // GET USER MEDIA CODE
      //--------------------
      navigator.getUserMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

var video;
var webcamStream;
//function to start webcam 
function startWebcam() {
if (navigator.getUserMedia) {
navigator.getUserMedia (

// constraints
{
video: true,
audio:false
},

// successCallback
function(localMediaStream) {
    // localMediaStream has the video stream
video = document.querySelector('video');
// video variable has the video tag 
//giving video tag the source of video
video.src = window.URL.createObjectURL(localMediaStream);
webcamStream = localMediaStream;

},

// errorCallback
function(err) {
console.log("The following error occured: " + err);
}
);
} else {
console.log("getUserMedia not supported");
}  
}

function stopWebcam() {
webcamStream.stop();
}
//---------------------
// TAKE A SNAPSHOT CODE
//---------------------
var canvas, ctx,dlnk;
function init() {
// Get the canvas and obtain a context for
// drawing in i
dlnk = document.getElementById("downloadlnk")
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
}

function snapshot() {
// Draws current image from the video element into the canvas
ctx.drawImage(video, 0,0, canvas.width, canvas.height);
var urll = canvas.toDataURL();
console.log(urll)
var fullQuality = canvas.toDataURL('image/png', 1.0);
dbtn.href=fullQuality;
stopWebcam()

}
function Download(){
    var dt = canvas.toDataURL('image/png');
    this.href = dt;
};
dlnk.addEventListener('click',Download);
