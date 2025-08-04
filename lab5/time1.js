function updateClock() {
  const now = new Date();
  const next = new Date(now.getTime() + 1000);

  const formatTime = (date) =>
    date.toLocaleTimeString("th-TH", { hour12: false });

  document.getElementById("time1").textContent = formatTime(now);
  document.getElementById("time2").textContent = formatTime(next);
}

setInterval(updateClock, 1000);
updateClock();
