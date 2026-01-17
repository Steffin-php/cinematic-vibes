let category = "";
let index = 0;

const quotes = {
  love: [
    "You had me at hello. – Jerry Maguire",
    "To me, you are perfect. – Love Actually",
    "The greatest thing you’ll ever learn is just to love and be loved.",
    "Love is passion, obsession, someone you can’t live without.",
    "I wish I knew how to quit you."
  ],

  motivation: [
    "Get busy living, or get busy dying.",
    "Why do we fall? So we can learn to pick ourselves up.",
    "Hope is a good thing, maybe the best of things.",
    "Don’t ever let somebody tell you you can’t do something.",
    "Great things take time."
  ],

  power: [
    "With great power comes great responsibility.",
    "I am inevitable.",
    "Great men are not born great, they grow great.",
    "Power resides where men believe it resides.",
    "The world bends to those who stand tall."
  ],

  dark: [
    "Sometimes the truth isn’t good enough.",
    "Chaos is order yet undeciphered.",
    "Every villain is the hero of his own story.",
    "Darkness is honesty without mercy.",
    "Fear is the sharpest weapon."
  ]
};

function setCategory(cat) {
  category = cat;
  index = 0;
  updateQuote();
}

function nextQuote() {
  if (!category) return;
  index = (index + 1) % quotes[category].length;
  updateQuote();
}

function updateQuote() {
  const el = document.getElementById("quote");
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerText = quotes[category][index];
    el.style.opacity = 1;
  }, 200);
}

function copyQuote() {
  navigator.clipboard.writeText(document.getElementById("quote").innerText);
  alert("Quote copied!");
}

function shareQuote() {
  const text = document.getElementById("quote").innerText;
  if (navigator.share) {
    navigator.share({ title: "Cinematic Vibes", text });
  } else {
    alert("Sharing not supported");
  }
}
