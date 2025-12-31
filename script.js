const body = document.body;

const backgrounds = {
  motivation: "assets/shawshank.jpg",
  hero: "assets/batman.jpg",
  love: "assets/notebook.jpg",
  villain: "assets/joker.jpg"
};

const quotes = {
  motivation: [
    { text: "Hope is a good thing, maybe the best of things.", author: "The Shawshank Redemption" },
    { text: "Get busy living, or get busy dying.", author: "The Shawshank Redemption" },
    { text: "Remember Red, hope is a good thing.", author: "Andy Dufresne" }
  ],

  hero: [
    { text: "It's not who I am underneath, but what I do that defines me.", author: "Batman Begins" },
    { text: "Why do we fall? So we can learn to pick ourselves up.", author: "Batman Begins" },
    { text: "A hero can be anyone.", author: "The Dark Knight Rises" }
  ],

  love: [
    { text: "The best love is the kind that awakens the soul.", author: "The Notebook" },
    { text: "It wasn't over. It still isn't over.", author: "The Notebook" },
    { text: "Love is passion, obsession, someone you can't live without.", author: "The Notebook" }
  ],

  villain: [
    { text: "Madness is like gravity. All it takes is a little push.", author: "The Joker" },
    { text: "Introduce a little anarchy.", author: "The Dark Knight" },
    { text: "If you're good at something, never do it for free.", author: "The Joker" }
  ]
};

// Load Quote of the Day (motivation default)
setBackground("motivation");
setQuote(quotes.motivation[0]);

function getQuote(category) {
  setBackground(category);
  const list = quotes[category];
  const random = list[Math.floor(Math.random() * list.length)];
  setQuote(random);
}

function setQuote(quote) {
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  quoteEl.textContent = `"${quote.text}"`;
  authorEl.textContent = `— ${quote.author}`;

  quoteEl.parentElement.style.animation = "none";
  void quoteEl.parentElement.offsetWidth;
  quoteEl.parentElement.style.animation = "fadeIn 1s ease";
}

function setBackground(category) {
  body.style.backgroundImage = `url(${backgrounds[category]})`;
}

function copyQuote() {
  navigator.clipboard.writeText(document.getElementById("quote").innerText);
  alert("Quote copied!");
}

function shareQuote() {
  const text = document.getElementById("quote").innerText;
  if (navigator.share) {
    navigator.share({ text });
  } else {
    alert("Sharing not supported");
  }
}
