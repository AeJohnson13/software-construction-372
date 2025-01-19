let index = 0 

function rotate() {
	const images = [
		"4_images/DJI_0127.jpg",
		"4_images/DJI_0154.jpg",
		"4_images/IMG_2392.JPEG", 
		"4_images/IMG_5327.JPEG"
	];
	const current_time = Date(milliseconds)
	if (
		document.getElementById("slide_show").src = images[index]
		index += 1;
		index %= 4;  

} 
