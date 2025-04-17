const compliments = [
  "You're doing great! 💪",
  "You're a fast learner! 🧠",
  "You have a great sense of design! 🎨",
  "You're a rockstar! 🌟",
  "You bring positive energy wherever you go! ☀️",
  "Your potential is limitless! 🚀",
  "You're making amazing progress! 🏃‍♀️",
  "You're a great team player! 🤝",
  "You're so thoughtful and kind! 🌼",
  "You're inspiring others around you! ✨",
  "You're unstoppable! 🛡️",
  "You make things look easy! 😎",
  "You’ve got that spark! 🔥",
  "You add value wherever you go!",
  "You're built different in the best way!",
];

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function giveCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[randomIndex];
  document.getElementById('compliment').textContent = compliment;
  document.body.style.backgroundColor = getRandomColor();
}
