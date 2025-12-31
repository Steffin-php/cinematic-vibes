const quotes = {
  motivation: [
    { text: "Why do we fall? So we can learn to pick ourselves up.", author: "Batman Begins" },
    { text: "Great men are not born great, they grow great.", author: "The Godfather" },
    { text: "You either die a hero or live long enough to see yourself become the villain.", author: "The Dark Knight" },
    { text: "Hope is a good thing, maybe the best of things.", author: "The Shawshank Redemption" }
  ],

  batman: [
    { text: "It's not who I am underneath, but what I do that defines me.", author: "Batman Begins" },
    { text: "Sometimes the truth isn't good enough.", author: "The Dark Knight" },
    { text: "A hero can be anyone.", author: "The Dark Knight Rises" }
  ],

  love: [
    { text: "You had me at hello.", author: "Jerry Maguire" },
    { text: "Love is putting someone else's needs before yours.", author: "Frozen" },
    { text: "The greatest thing you'll ever learn is just to love and be loved.", author: "Moulin Rouge" }
  ],

  villain: [
    { text: "Madness, as you know, is like gravity.", author: "The Joker" },
    { text: "Do you wanna know how I got these scars?", author: "The Dark Knight" },
    { text: "If you're good at something, never do it for free.", author: "The Joker" }
  ]
};

// Quote of the Day
const today = new Date().getDate();
const dailyQuotes = Object.values(quotes).flat();
const daily = dailyQuotes[today % dailyQuotes.length];
setQuote(daily);

// Functions
function getQuote(category) {
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

function copyQuote() {
  const text = document.getElementById("quote").innerText;
  navigator.clipboard.writeText(text);
  alert("Quote copied!");
}

function shareQuote() {
  const text = document.getElementById("quote").innerText;
  if (navigator.share) {
    navigator.share({ text });
  } else {
    alert("Sharing not supported on this browser");
  }
}
