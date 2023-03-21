/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  let password = generatePassword();
  let passwordText = document.getElementById("password");
  let pwdLength = prompt("How long do you want your Password");
  passwordText.value = "Your Secure Password";

  if( typeof pwdLength === "number" || pwdLength < 8 || pwdLength > 128){
    alert("Password Must be at least 8 Char long and no longer than 128 Char")
  } else {
      let lowerCase = confirm("Would you like your password to include lowercase?")
      let upperCase = confirm("Would you like your password to include uppercase?")
      let numeric = confirm("Would you like your password to include Numbers?")
      let specialChar = confirm("Would you like your passwordd to include special characters?")
      if(lowerCase||upperCase||numeric||specialChar){
      password = generatePassword(pwdLength,lowerCase,upperCase,numeric,specialChar)
  }
  }

  passwordText.value += ` is ${password}`;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(a,b,c,d,e) {
 
 let lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 let numeric =[0,1,2,3,4,5,6,7,8,9];
 let specialChar=[" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\,","]","^",",","_","`","{","|","}","~"]
 let pwdArray=[];

 if(b){
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

let pwd=[]
 for(i =0; i<a;i++){
  pwd.push(pwdArray[Math.floor(Math.random()*pwdArray.length)])
 }
 
 return pwd.join('');
}

