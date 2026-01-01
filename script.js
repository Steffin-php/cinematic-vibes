let currentCategory = "motivation";
let index = 0;

const quotes = {
  motivation: [
    ["Get busy living, or get busy dying.", "The Shawshank Redemption"],
    ["The world ain’t all sunshine and rainbows.", "Rocky"],
    ["I could have been a contender.", "Raging Bull"],
    ["Greatness is not born. It’s made.", "Creed"],
    ["Carpe diem. Seize the day.", "Dead Poets Society"]
  ],

  hero: [
    ["You’ll believe a man can fly.", "Superman"],
    ["Hope is what makes us strong.", "Man of Steel"],
    ["A hero can be anyone.", "The Dark Knight Rises"],
    ["I stand for truth and justice.", "Superman Returns"],
    ["Heroes rise.", "Justice League"]
  ],

  love: [
    ["It was always you.", "The Notebook"],
    ["I want all of you, forever.", "The Notebook"],
    ["To me, you are perfect.", "Love Actually"],
    ["You complete me.", "Jerry Maguire"],
    ["I see you.", "Avatar"]
  ],

  villain: [
    ["Why so serious?", "The Dark Knight"],
    ["Introduce a little anarchy.", "The Dark Knight"],
    ["Madness is like gravity.", "The Dark Knight"],
    ["You get what you deserve.", "Joker"],
    ["Smile, it confuses people.", "Joker"]
  ]
};

function changeCategory(cat) {
  document.body.className = cat;
  currentCategory = cat;
  index = 0;
  showQuote();
}

function nextQuote() {
  index = (index + 1) % quotes[currentCategory].length;
  showQuote();
}

function showQuote() {
  const q = quotes[currentCategory][index];
  document.getElementById("quote").textContent = `"${q[0]}"`;
  document.getElementById("movie").textContent = `— ${q[1]}`;
}

function copyQuote() {
  const text =
    document.getElementById("quote").textContent + " " +
    document.getElementById("movie").textContent;
  navigator.clipboard.writeText(text);
  alert("Quote copied!");
}

function saveQuote() {
  const text =
    document.getElementById("quote").textContent + " " +
    document.getElementById("movie").textContent;

  let saved = JSON.parse(localStorage.getItem("savedQuotes") || "[]");
  saved.push(text);
  localStorage.setItem("savedQuotes", JSON.stringify(saved));
  alert("Quote saved!");
}

function shareQuote() {
  const text =
    document.getElementById("quote").textContent + " " +
    document.getElementById("movie").textContent;

  if (navigator.share) {
    navigator.share({ text });
  } else {
    alert("Sharing not supported on this browser.");
  }
}

/* Load first quote */
showQuote();
