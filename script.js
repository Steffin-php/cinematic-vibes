const quotes = [
  "Why so serious? — The Dark Knight",
  "You either die a hero or live long enough to see yourself become the villain. — The Dark Knight",
  "I am inevitable. — Avengers",
  "Hope is a good thing, maybe the best of things. — The Shawshank Redemption",
  "With great power comes great responsibility. — Spider-Man",
  "Say hello to my little friend! — Scarface",
  "I'm gonna make him an offer he can't refuse. — The Godfather",
  "May the Force be with you. — Star Wars",
  "Life is like a box of chocolates. — Forrest Gump",
  "To infinity and beyond! — Toy Story",
  "This is Sparta! — 300",
  "Dreams feel real while we're in them. — Inception",
  "I see dead people. — The Sixth Sense",
  "Freedom! — Braveheart",
  "I am Batman. — Batman"
];

const quoteElement = document.querySelector(".quote");
const button = document.getElementById("changeQuote");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  quoteElement.style.opacity = 0;

  setTimeout(() => {
    quoteElement.textContent = `"${quotes[randomIndex]}"`;
    quoteElement.style.opacity = 1;
  }, 300);
});
