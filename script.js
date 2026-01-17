const quotes = {
  love: [
    "You had me at hello. – Jerry Maguire",
    "The greatest thing you’ll ever learn is just to love and be loved in return. – Moulin Rouge",
    "I wish I knew how to quit you. – Brokeback Mountain",
    "Love means never having to say you’re sorry. – Love Story"
  ],

  motivation: [
    "Get busy living, or get busy dying. – The Shawshank Redemption",
    "It’s not who I am underneath, but what I do that defines me. – Batman Begins",
    "Hope is a good thing, maybe the best of things. – Shawshank Redemption",
    "Don’t let anyone tell you what you can’t do. – The Pursuit of Happyness"
  ],

  power: [
    "With great power comes great responsibility. – Spider-Man",
    "I am inevitable. – Avengers: Endgame",
    "A man who doesn’t spend time with his family can never be a real man. – The Godfather",
    "Why so serious? – The Dark Knight"
  ],

  villain: [
    "You either die a hero, or live long enough to see yourself become the villain. – The Dark Knight",
    "I’m not bad. I’m just drawn that way. – Who Framed Roger Rabbit",
    "Power is only given to those who are prepared to lower themselves to pick it up. – House of Cards",
    "Chaos is a ladder. – Game of Thrones"
  ]
};

function showQuote(type) {
  const randomIndex = Math.floor(Math.random() * quotes[type].length);
  document.getElementById("quote").innerText = quotes[type][randomIndex];
}
