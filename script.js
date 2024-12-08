const clock = document.getElementById('clock');

function updateClock() {
   const now = new Date(); //getting current time.

   //extracting hour, minutes and second.
   let hours = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();

   //adding zero
   hours = hours < 10 ? '0' + hours : hours;
   minutes = minutes < 10 ? '0' + minutes : minutes;
   seconds = seconds < 10 ? '0' + seconds : seconds;

   //shwing time in 00:00:00
   const currentTime = `${hours}:${minutes}:${seconds}`;

   clock.textContent = currentTime;
}

setInterval(updateClock, 1000);

updateClock();