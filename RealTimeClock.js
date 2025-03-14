const clock = document.getElementById("clock");

setInterval(() =>{
    
let now = new Date();
let hours = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");
let seconds = now.getSeconds().toString().padStart(2, "0");

let amOrPm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;

let time = `${hours}:${minutes}:${seconds} ${amOrPm}`;
clock.innerText = time;

}, 1000);

