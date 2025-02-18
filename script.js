let img = document.getElementById("image");
let rotation = 0;


function rotate() {
    if (rotation >= 360) {
        rotation = 0
    }
    else {
        rotation += 360;
    }

    document.getElementById("image").style.transform = `rotate(${rotation}deg)`;
    document.getElementById("image").style.transitionDuration = "2s";
}

img.addEventListener("click", function(){rotate()});


