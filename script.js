let currentCategory = "";
let index = 0;

const data = {
  love: [
    "You had me at hello. – Jerry Maguire",
    "To me, you are perfect. – Love Actually",
    "Love means never having to say you're sorry. – Love Story",
    "I wish I knew how to quit you. – Brokeback Mountain",
    "The best love is the kind that awakens the soul. – The Notebook"
  ],

  motivation: [
    "Get busy living, or get busy dying. – Shawshank Redemption",
    "Why do we fall? So we can learn to pick ourselves up. – Batman Begins",
    "Hope is a good thing, maybe the best of things.",
    "Don’t let anyone tell you what you can’t do.",
    "Great things never come from comfort zones."
  ],

  power: [
    "With great power comes great responsibility. – Spider-Man",
    "I am inevitable. – Avengers",
    "A king without power is no king at all.",
    "You merely adopted the dark. I was born in it.",
    "Great men are not born great, they grow great."
  ],

  dark: [
    "Sometimes the truth isn't good enough.",
    "Chaos is order yet undeciphered.",
    "The world is cruel, and the only morality is power.",
    "Every villain is a hero in his own story.",
    "Darkness is not evil; it is honest."
  ]
};

function setCategory(cat) {
  currentCategory = cat;
  index = 0;
  document.getElementById("quote").innerText = data[cat][index];
}

function nextQuote() {
  if (!currentCategory) return;
  index = (index + 1) % data[currentCategory].length;
  document.getElementById("quote").innerText = data[currentCategory][index];
}

function copyQuote() {
  navigator.clipboard.writeText(document.getElementById("quote").innerText);
  alert("Copied!");
}

function shareQuote() {
  const text = document.getElementById("quote").innerText;
  if (navigator.share) {
    navigator.share({ title: "Cinematic Vibes", text });
  } else {
    alert("Share not supported on this device.");
  }
}


