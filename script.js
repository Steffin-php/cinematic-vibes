const body = document.body;
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

let currentCategory = "motivation";
let currentIndex = 0;

const backgrounds = {
  motivation: "images/shawshank.jpg",
  hero: "images/batman.jpg",
  love: "images/notebook.jpg",
  villain: "images/joker.jpg"
};

const quotes = {
  motivation: [
    {q:"Hope is a good thing, maybe the best of things.", a:"Shawshank Redemption"},
    {q:"Get busy living, or get busy dying.", a:"Shawshank Redemption"},
    {q:"Fear can hold you prisoner. Hope can set you free.", a:"Shawshank Redemption"},
    {q:"Every man has his breaking point.", a:"Shawshank Redemption"},
    {q:"Remember Red, hope is a good thing.", a:"Andy Dufresne"},
    // add up to 20
  ],

  hero: [
    {q:"Why do we fall? So we can learn to pick ourselves up.", a:"Batman Begins"},
    {q:"A hero can be anyone.", a:"Dark Knight Rises"},
    {q:"It's not who I am underneath, but what I do.", a:"Batman Begins"},
    {q:"You either die a hero, or live long enough to see yourself become the villain.", a:"Harvey Dent"},
    {q:"Sometimes people deserve to have their faith rewarded.", a:"Batman"},
    // add up to 20
  ],

  love: [
    {q:"The best love is the kind that awakens the soul.", a:"The Notebook"},
    {q:"It wasn't over. It still isn't over.", a:"The Notebook"},
    {q:"Love is passion, obsession, someone you can’t live without.", a:"The Notebook"},
    {q:"This is my sweetheart.", a:"The Notebook"},
    {q:"I want all of you, forever.", a:"The Notebook"},
    // add up to 20
  ],

  villain: [
    {q:"Madness is like gravity, all it takes is a little push.", a:"Joker"},
    {q:"Introduce a little anarchy.", a:"Joker"},
    {q:"If you're good at something, never do it for free.", a:"Joker"},
    {q:"Smile, because it confuses people.", a:"Joker"},
    {q:"Let's put a smile on that face.", a:"Joker"},
    // add up to 20
  ]
};

function changeCategory(cat) {
  currentCategory = cat;
  currentIndex = 0;
  body.style.backgroundImage = `url(${backgrounds[cat]})`;
  showQuote();
}

function showQuote() {
  const item = quotes[currentCategory][currentIndex];
  quoteEl.textContent = `"${item.q}"`;
  authorEl.textContent = `— ${item.a}`;
}

function nextQuote() {
  currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
  showQuote();
}

function copyQuote() {
  navigator.clipboard.writeText(quoteEl.textContent);
  alert("Quote copied!");
}

function saveFavorite() {
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];
  favs.push(quoteEl.textContent);
  localStorage.setItem("favorites", JSON.stringify(favs));
  alert("Saved to favorites!");
}

function shareQuote() {
  if (navigator.share) {
    navigator.share({ text: quoteEl.textContent });
  } else {
    alert("Sharing not supported");
  }
}

// LOAD DEFAULT
changeCategory("motivation");
