const backgrounds = [
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  "https://images.unsplash.com/photo-1502136969935-8d07106b9a94",
  "https://images.unsplash.com/photo-1517602302552-471fe67acf66"
];

const quotes = {
  action: [
    { text: "Why so serious?", movie: "The Dark Knight" },
    { text: "I am Batman.", movie: "Batman" },
    { text: "This is Sparta!", movie: "300" },
    { text: "I am inevitable.", movie: "Avengers" }
  ],
  motivation: [
    { text: "Hope is a good thing, maybe the best of things.", movie: "Shawshank Redemption" },
    { text: "Dreams feel real while we're in them.", movie: "Inception" },
    { text: "Great men are not born great, they grow great.", movie: "The Godfather" }
  ],
  life: [
    { text: "Life is like a box of chocolates.", movie: "Forrest Gump" },
    { text: "Get busy living, or get busy dying.", movie: "Shawshank Redemption" },
    { text: "Carpe diem. Seize the day.", movie: "Dead Poets Society" }
  ]
};

let currentCategory = "action";
let bgIndex = 0;

const quoteText = document.querySelector(".quote-text");
const movieName = document.querySelector(".movie-name");

function nextQuote() {
  const list = quotes[currentCategory];
  const random = list[Math.floor(Math.random() * list.length)];

  quoteText.textContent = `"${random.text}"`;
  movieName.textContent = `— ${random.movie}`;

  document.body.style.backgroundImage = `url(${backgrounds[bgIndex]})`;
  bgIndex = (bgIndex + 1) % backgrounds.length;
}

function setCategory(category) {
  currentCategory = category;
  nextQuote();
}

/* Initial load */
nextQuote();

