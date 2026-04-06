function updateTime() {
  const now = new Date();
  document.getElementById("dateTime").textContent = now.toLocaleString();
}

setInterval(updateTime, 1000);
updateTime();