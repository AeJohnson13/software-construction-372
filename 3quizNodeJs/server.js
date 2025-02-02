// Import Express
const express = require('express');
const app = express();

app.use(express.static(__dirname, { // host the whole directory
//    extensions: ["html", "htm", "gif", "png"],
}))

// Define a route
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/Home.html')
});

// Start the server
app.listen(3000, () => {
    console.log('this is a server');
});
