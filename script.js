var index = 0; //for toggling of next and prev icons

show_image(index); // to display first image as default

function show_image(i) {  //i will either increment or decrement the index
    index += i;

    var images = document.getElementsByClassName("image"); // an array of all our images

    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < images.length; i++) { // created to block other images 
        images[i].style.display = "none"; // iteration through each images to block them one by one
    }

    for (i = 0; i < dots.length; i++) { // similar to images, blocking other dots
        dots[i].className = dots[i].className.replace("active", ""); //The active class is replaced by null class 
    }

    if (index > images.length - 1) {
        index = 0; //user goes from last image to first image
    }

    if (index < 0) {
        index = images.length - 1; //user goes to last image from first image
    }

    // displaying the image we need
    images[index].style.display = "block";
    dots[index].className += "active";



}