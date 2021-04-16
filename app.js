// Sets the expected due date
let countDownDate = new Date("Aug 20, 2021 15:37:25").getTime();

//Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "The baby is here!!!";
  }
}, 1000);

//baby due date text
const bannerText = document.getElementById('text');
const text = "August 28th, 2021";

//set banner scrolling text speed
let index = 1;


writeText();

function writeText() {
    bannerText.innerText = text.slice(0, index);

    index++

    if(index > text.length) {
        index = 1;
    }

    setTimeout(writeText, 500)
}