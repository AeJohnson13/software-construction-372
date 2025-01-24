// characterCheck( inputString ) 
// 



document.getElementById("UserNameInput").value;





// Will return true if inputString contains only letters A-Z or a-z,
// otherwise returns false
function characterCheck(inputString){
  const re = /[a-zA-Z]+/
  let invalidCharCheck = re.exec(inputString)
  return (inputString == invalidCharCheck)
} 

