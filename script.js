let currentCategory = "";
let currentIndex = 0;

const quotes = {
  love: [
    "You had me at hello. – Jerry Maguire",
    "Love is passion, obsession, someone you can’t live without. – Meet Joe Black",
    "The greatest thing you’ll ever learn is just to love and be loved. – Moulin Rouge",
    "I wish I knew how to quit you. – Brokeback Mountain",
    "To me, you are perfect. – Love Actually"
  ],

  motivation: [
    "Get busy living, or get busy dying. – Shawshank Redemption",
    "Don’t ever let somebody tell you you can’t do something. – Pursuit of Happyness",
    "Why do we fall? So we can learn to pick ourselves up. – Batman Begins",
    "Hope is a good thing, maybe the best of things. – Shawshank Redemption",
    "Your time is limited, so don’t waste it living someone else’s life."
  ],

  power: [
    "With great power comes great responsibility. – Spider-Man",
    "I am inevitable. – Avengers: Endgame",
    "A man who doesn’t stand for something will fall for anything.",
    "You merely adopted the dark. I was born in it. – The Dark Knight Rises",
    "Great men are not born great, they grow great. – The Godfather"
  ],

  villain: [
    "You either die a hero or live long enough to see yourself become the villain. – The Dark Knight",
    "Why so serious? – Joker",
    "Chaos isn’t a pit. Chaos is a ladder.",
    "I don’t want to rule the world. I just want my half. – Dr. Evil",
    "Sometimes the truth isn’t good enough, sometimes people deserve more. – Joker"
  ]
};

function changeCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  document.getElementById("quote").innerText = quotes[category][currentIndex];
}

function nextQuote() {
  if (!currentCategory) return;

  currentIndex++;
  if (currentIndex >= quotes[currentCategory].length) {
    currentIndex = 0;
  }
  document.getElementById("quote").innerText =
    quotes[currentCategory][currentIndex];
}

function copyQuote() {
  const text = document.getElementById("quote").innerText;
  navigator.clipboard.writeText(text);
  alert("Quote copied!");
}

function shareQuote() {
  const text = document.getElementById("quote").innerText;
  if (navigator.share) {
    navigator.share({
      title: "Cinematic Vibes",
      text: text
    });
  } else {
    alert("Sharing not supported on this device.");
  }
}

