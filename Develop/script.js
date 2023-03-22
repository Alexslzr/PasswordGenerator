// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.getElementById("password");
  let pwdLength = prompt("How long do you want your Password");
  passwordText.value = "Your Secure Password";

  if( isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128){   //if the value its outside or the range 8-128 and is not a number we display a msg
    alert("Password Must be at least 8 Char long and no longer than 128 Char")
  } else {
      let lowerCase = confirm("Would you like your password to include lowercase?")
      let upperCase = confirm("Would you like your password to include uppercase?")
      let numeric = confirm("Would you like your password to include Numbers?")
      let specialChar = confirm("Would you like your passwordd to include special characters?")
      if(lowerCase||upperCase||numeric||specialChar){  
        password = generatePassword(pwdLength,lowerCase,upperCase,numeric,specialChar)
        passwordText.value += ` is ${password}`;  //if at least one is true, we call the function to generate the password
      } else {
        passwordText.value = "Please select at least one of the options" //if not we will show an alert were it says that you should at least select one of the options
      }
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(a,b,c,d,e) { //the funcion will receive all the values from the prompts to know which type of char pwd will include
  //for the pwd generator i have 4 different arrays with the type of char that the pwd can contain
  let lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let numeric = [0,1,2,3,4,5,6,7,8,9];
  let specialChar=[" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\,","]","^",",","_","`","{","|","}","~"]
  let pwdArray=[]; //this array is used to be the final array from which we will create our pwd

  if(b){ //if the prompt of lowercase its true we will concat this array to the final array and so on with all
    pwdArray = pwdArray.concat(lowCase)
  }
  if(c){
    pwdArray = pwdArray.concat(upperCase)
  }
  if(d){
    pwdArray = pwdArray.concat(numeric)
  }
  if(e){
    pwdArray = pwdArray.concat(specialChar)
 }

  let pwd=[]; //we will declare a new array where we will introduce the pwd
  for(i =0; i<a;i++){
    if(d && !i){ //since numeric array is very small it can be the case that no numeric value is included on pwd even when user selected to include numbers, so we force the first value to be number in case user want to have numbers
      pwd.push(numeric[Math.floor(Math.random()*numeric.length)])
    }
    pwd.push(pwdArray[Math.floor(Math.random()*pwdArray.length)]) //here he will push random values in to our pwd from the final array
  }
 
  return pwd.join(''); //finally we join the pwd to return an string instead of an array
}

