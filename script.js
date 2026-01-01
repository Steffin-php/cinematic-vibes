let currentCategory = "";
let index = 0;

const quotes = {
  motivation: [
    ["Hope is a good thing, maybe the best of things.", "Shawshank Redemption"],
    ["Get busy living, or get busy dying.", "Shawshank Redemption"],
    ["Carpe diem. Seize the day.", "Dead Poets Society"],
    ["Great men are not born great, they grow great.", "The Godfather"],
    ["Why do we fall? So we can learn to pick ourselves up.", "Batman Begins"],
    ["Do what you love.", "La La Land"],
    ["Your future is whatever you make it.", "Back to the Future"],
    ["Never tell me the odds.", "Star Wars"],
    ["Believe you can.", "Rocky"],
    ["It ain’t about how hard you hit.", "Rocky Balboa"],
    ["We become what we choose.", "Spider-Man"],
    ["Every man dies, not every man lives.", "Braveheart"],
    ["You control your destiny.", "Kung Fu Panda"],
    ["Dreams feel real while we're in them.", "Inception"],
    ["You are your choices.", "The Dark Knight"],
    ["Stay gold.", "The Outsiders"],
    ["Don’t let fear stop you.", "After Earth"],
    ["Rise.", "The Dark Knight Rises"],
    ["It’s not who I am underneath.", "Batman Begins"],
    ["Make each day count.", "Titanic"]
  ],

  hero: [
    ["I’m Batman.", "The Dark Knight"],
    ["With great power comes great responsibility.", "Spider-Man"],
    ["I can do this all day.", "Captain America"],
    ["Why do we fall?", "Batman Begins"],
    ["Hope is like the sun.", "Wonder Woman"],
    ["Heroes are made by the path they choose.", "Thor"],
    ["A hero can be anyone.", "The Dark Knight Rises"],
    ["Truth, justice, and hope.", "Man of Steel"],
    ["I am Iron Man.", "Iron Man"],
    ["You’ll never walk alone.", "Justice League"],
    ["I choose to run toward my problems.", "The Flash"],
    ["Sometimes the world needs hope.", "Superman"],
    ["I fight for those who cannot.", "Black Panther"],
    ["I’m always angry.", "Hulk"],
    ["We save who we can.", "Avengers"],
    ["I will protect this world.", "Doctor Strange"],
    ["We don’t trade lives.", "Avengers"],
    ["A real hero stays.", "Logan"],
    ["We rise together.", "Justice League"],
    ["The night is darkest before dawn.", "The Dark Knight"]
  ],

  love: [
    ["It was always you.", "The Notebook"],
    ["You complete me.", "Jerry Maguire"],
    ["I wish I knew how to quit you.", "Brokeback Mountain"],
    ["To me, you are perfect.", "Love Actually"],
    ["I love you 3000.", "Avengers"],
    ["I want all of you.", "The Notebook"],
    ["You had me at hello.", "Jerry Maguire"],
    ["I’m just a girl.", "Notting Hill"],
    ["I choose you.", "Twilight"],
    ["I fell in love with you.", "Fault in Our Stars"],
    ["You make me better.", "As Good As It Gets"],
    ["You are my greatest adventure.", "Up"],
    ["I’ll never let go.", "Titanic"],
    ["You’re my home.", "Dear John"],
    ["Love means never having to say you’re sorry.", "Love Story"],
    ["I see you.", "Avatar"],
    ["I belong with you.", "Serendipity"],
    ["I’d rather be miserable with you.", "Titanic"],
    ["It’s you.", "Crazy Rich Asians"],
    ["I love you. That’s it.", "Before Sunrise"]
  ],

  villain: [
    ["Why so serious?", "The Dark Knight"],
    ["I’m an agent of chaos.", "The Dark Knight"],
    ["Madness is like gravity.", "The Dark Knight"],
    ["You either die a hero.", "The Dark Knight"],
    ["Smile, it confuses people.", "Joker"],
    ["I am inevitable.", "Avengers"],
    ["Power is everything.", "Scarface"],
    ["You can’t handle the truth.", "A Few Good Men"],
    ["I’m the bad guy.", "Despicable Me"],
    ["Fear is power.", "Batman Begins"],
    ["I like being bad.", "Megamind"],
    ["I am your father.", "Star Wars"],
    ["We are venom.", "Venom"],
    ["The world is cruel.", "Watchmen"],
    ["Chaos reigns.", "Joker"],
    ["I win.", "No Country for Old Men"],
    ["I’m not a monster.", "Joker"],
    ["You need people like me.", "Scarface"],
    ["I’m the villain of my own story.", "Joker"],
    ["Let the games begin.", "Saw"]
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
