const passwordBox = document.getElementById("Password")
const length=12
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*()_+,.;'[]<>?:"

const allchars = uppercase + lowercase + symbol + number

function createpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordBox.value = password
}

function Copypassword(){
    passwordBox.select();
    document.execCommand("copy")
}