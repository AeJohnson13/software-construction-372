/* 
HomePageScripts.js 
Alex Johnson
1/24/25
For CSF372 Quiz 2
contains functions used in Home.html
*/ 


// index keeps track of position within slideshow
let index = 1; 

// rotate() 
// 	changes src with ID "slide_show", 
//	rotating through an array of images
function rotate() {
	const images = [
		"4_images/DJI_0127.jpg",
		"4_images/DJI_0154.jpg",
		"4_images/IMG_2392.JPEG", 
		"4_images/IMG_5327.JPEG"
	];

	document.getElementById("slide_show").src = images[index]
		index += 1;
		index %= 4;  

}

// rotater() 
// 	calls function rotate() on a 4 second interval 
function rotater() { 
	var timer = window.setInterval(rotate, 4000);
} 

