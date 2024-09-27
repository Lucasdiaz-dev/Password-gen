const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"
]; 

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

function generatePassword() {
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
    
    let passwordLength = 15


    for (let i = 0; i < passwordLength; i++){
    randomPasswordOne += characters[Math.floor(Math.random() * characters.length)]
    randomPasswordTwo += characters[Math.floor(Math.random() * characters.length)]
    }
passwordOne.textContent = randomPasswordOne
passwordTwo.textContent = randomPasswordTwo
}

// copy-on-click
passwordOne.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordOne.innerText);
    alert('Copied password ' + passwordOne.innerText);
  });

passwordTwo.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordTwo.innerText);
    alert('Copied password ' + passwordTwo.innerText);
  });