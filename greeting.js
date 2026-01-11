document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();

  let text;
  if (hour >= 5 && hour <= 11) text = "Buongiorno";
  else if (hour <= 14) text = "Buon pomeriggio";
  else if (hour <= 17) text = "Buon pomeriggio";
  else text = "Buonasera";

  greeting.textContent = text;
});
