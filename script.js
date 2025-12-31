const backgrounds = {
  motivation: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  batman: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  love: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
  villain: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
};

const quotes = {
  motivation: [
    ["Hope is a good thing.", "Shawshank Redemption"],
    ["Dreams feel real while we're in them.", "Inception"],
    ["Get busy living.", "Shawshank Redemption"],
    ["Great men grow great.", "The Godfather"]
  ],
  batman: [
    ["Why so serious?", "The Dark Knight"],
    ["I am Batman.", "Batman"],
    ["You either die a hero...", "The Dark Knight"],
    ["It's not who I am underneath.", "Batman Begins"]
  ],
  love: [
    ["You complete me.", "Jerry Maguire"],
    ["Love means never having to say sorry.", "Love Story"],
    ["I wish I knew how to quit you.", "Brokeback Mountain"],
    ["It was always you.", "The Notebook"]
  ],
  villain: [
    ["I am inevitable.", "Avengers"],
    ["Introduce a little anarchy.", "The Dark Knight"],
    ["Say hello to my little friend.", "Scarface"],
    ["Chaos is fair.", "The Dark Knight"]
  ]
};

let currentCategory = "motivation";

const quoteText = document.getElementById("quoteText");
const movieName = document.getElementById("movieName");

function nextQuote() {
  const list = quotes[currentCategory];
  const random = list[Math.floor(Math.random() * list.length)];

  quoteText.textContent = `"${random[0]}"`;
  movieName.textContent = `— ${random[1]}`;
}

function setCategory(cat) {
  currentCategory = cat;
  document.body.style.backgroundImage = `url(${backgrounds[cat]})`;
  nextQuote();
}

function copyQuote() {
  const text = quoteText.textContent + " " + movieName.textContent;
  navigator.clipboard.writeText(text);
  alert("Quote copied!");
}

// Quote of the day
const dayIndex = new Date().getDate() % quotes.motivation.length;
quoteText.textContent = `"${quotes.motivation[dayIndex][0]}"`;
movieName.textContent = `— ${quotes.motivation[dayIndex][1]}`;
document.body.style.backgroundImage = `url(${backgrounds.motivation})`;

