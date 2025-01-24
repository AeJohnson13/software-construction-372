let index = 1 

function rotate() {
	console.log("test")
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


function rotater() { 
	console.log("starting rotation")
	var timer = window.setInterval(rotate, 4000);
} 

