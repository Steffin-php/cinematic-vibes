let currentCategory = "";
let index = 0;

const quotes = {
  motivation: [
    ["The world ain’t all sunshine and rainbows.", "Rocky Balboa"],
    ["I could have been a contender.", "Raging Bull"],
    ["Greatness is not born, it is made.", "Creed"],
    ["Get busy living, or get busy dying.", "Shawshank Redemption"],
    ["Carpe diem. Seize the day.", "Dead Poets Society"],
    ["Every champion was once a contender.", "Rocky"],
    ["Don’t let fear stop you.", "After Earth"],
    ["We rise by lifting ourselves.", "Raging Bull"],
    ["Dreams feel real while we're in them.", "Inception"],
    ["It’s not about how hard you hit.", "Rocky Balboa"]
  ],

  hero: [
    ["You’ll believe a man can fly.", "Superman"],
    ["Hope is the light.", "Man of Steel"],
    ["I stand for truth.", "Superman Returns"],
    ["A hero can be anyone.", "The Dark Knight Rises"],
    ["With great power comes responsibility.", "Spider-Man"],
    ["I can do this all day.", "Captain America"],
    ["We fight for those who can’t.", "Justice League"],
    ["The symbol means hope.", "Man of Steel"],
    ["You are stronger than you think.", "Superman"],
    ["Heroes rise.", "Justice League"]
  ],

  love: [
    ["It was always you.", "The Notebook"],
    ["You are my best friend.", "The Notebook"],
    ["I want all of you, forever.", "The Notebook"],
    ["I love you. That’s it.", "Before Sunrise"],
    ["To me, you are perfect.", "Love Actually"],
    ["You complete me.", "Jerry Maguire"],
    ["I see you.", "Avatar"],
    ["You make me better.", "As Good As It Gets"],
    ["I’d rather be miserable with you.", "Titanic"],
    ["You’re my home.", "Dear John"]
  ],

  villain: [
    ["Why so serious?", "The Dark Knight"],
    ["Introduce a little anarchy.", "The Dark Knight"],
    ["Madness is like gravity.", "The Dark Knight"],
    ["I’m an agent of chaos.", "The Dark Knight"],
    ["Smile, it confuses people.", "Joker"],
    ["You get what you deserve.", "Joker"],
    ["I don’t want to kill you.", "Joker"],
    ["Chaos is fair.", "Joker"],
    ["Nobody panics when things go according to plan.", "Joker"],
    ["Let’s put a smile on that face.", "Joker"]
  ]
};

function changeCategory(cat) {
  document.body.className = cat;
  currentCategory = cat;
  index = 0;
  showQuote();
}

function nextQuote() {
  if (!currentCategory) return;
  index = (index + 1) % quotes[currentCategory].length;
  showQuote();
}

function showQuote() {
  const q = quotes[currentCategory][index];
  document.getElementById("quote").textContent = `"${q[0]}"`;
  document.getElementById("movie").textContent = `— ${q[1]}`;
}

function copyQuote() {
  navigator.clipboard.writeText(
    document.getElementById("quote").textContent + " " +
    document.getElementById("movie").textContent
  );
  alert("Quote copied!");
}

function saveQuote() {
  const saved = JSON.parse(localStorage.getItem("savedQuotes") || "[]");
  saved.push(document.getElementById("quote").textContent);
  localStorage.setItem("savedQuotes", JSON.stringify(saved));
  alert("Saved!");
}

function shareQuote() {
  const text =
    document.getElementById("quote").textContent +
    " " +
    document.getElementById("movie").textContent;

  if (navigator.share) {
    navigator.share({ text });
  } else {
    alert("Sharing not supported on this browser.");
  }
}
