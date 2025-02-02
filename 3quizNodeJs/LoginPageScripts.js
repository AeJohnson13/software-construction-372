/* 
LoginPageScripts.js 
Alex Johnson
1/24/25
For CSF372 Quiz 2
contains functions used in Login.html
*/ 


// checkUserName() 
// 	checks to see if a valid username has been typed,
// 	displays an error message if invalid characters are present

function checkUserName()
{ 
	console.log("running username check")
	let username =  document.getElementById("UserNameInput").value;
	if(!characterCheck(username))
	{ 
		document.getElementById("error text").innerHTML = "error, username may only contain letter a-z" 	
	}
	else
	{ 
		document.getElementById("error text").innerHTML = "" 
	} 
} 



// characterCheck( inputString ) 
//
// Will return true if inputString contains only letters A-Z or a-z,
// otherwise returns false
function characterCheck(inputString){
  const re = /[a-zA-Z]+|^ ?/
  let invalidCharCheck = re.exec(inputString)
  return (inputString == invalidCharCheck)
} 


