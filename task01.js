const currentTimeUTC = document.getElementById("currentTimeUTC");
const currentDay = document.getElementById("currentDay");

setInterval(() => {
  const now = new Date();
  const utc = now.toUTCString();
  currentTimeUTC.innerText = utc.slice(17, 25);
  currentDay.innerText = now.toLocaleDateString("en-US", { weekday: "long" });
}, 1000);
