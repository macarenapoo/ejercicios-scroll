window.addEventListener('scroll', function(){
    var video = document.getElementById("video");    
    var posVideo = video.offsetTop;
    var currentScroll = window.pageYOffset;
    var windowHeight = window.innerHeight;
    var alturaVideo = video.offsetHeigt;

    if (posVideo < currentScroll + windowHeight &&
        posVideo < currentScroll
        ) {
            video.classList.add("play");
    }else{
        video.classList.remove("play");
    }

    // console.log("posVideo", posVideo);
    // console.log("currentScroll", currentScroll);
    // this.console.log("windowHeight" , windowHeight);
});