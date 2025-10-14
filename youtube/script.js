
const video = document.querySelector("video");


video.addEventListener("mouseenter", function(){
    video.play();
});

video.addEventListener("mouseleave", function(){
    video.pause();
    video.currentTime = 0;
});

