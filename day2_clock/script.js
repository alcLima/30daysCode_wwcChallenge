const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const currentSeconds = now.getSeconds();
  const secondsDegrees = (currentSeconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(currentSeconds, secondsDegrees);

  if (currentSeconds == 0) {
    secondHand.classList.add("hand_zero");
  }

  if (currentSeconds != 0) {
    secondHand.classList.remove("hand_zero");
  }

  const currentMinutes = now.getMinutes();
  const minutesDegrees = (currentMinutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const currentHours = now.getHours();
  const hoursDegrees = (currentHours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
