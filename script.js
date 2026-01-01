const quotes = {
    motivation: [
        "Hope is a good thing, maybe the best of things. – Shawshank Redemption",
        "Get busy living, or get busy dying. – Shawshank Redemption",
        "Carpe diem. Seize the day. – Dead Poets Society",
        "Great men are not born great, they grow great. – The Godfather",
        "Your life is the sum of your choices. – Arrival",
        "Do what you love, and you'll never work a day. – 3 Idiots",
        "Fear can hold you prisoner. – Shawshank Redemption",
        "Dreams feel real while we are in them. – Inception",
        "Push yourself, because no one else will. – Whiplash",
        "You don’t get what you wish for, you get what you work for.",
        "Life finds a way. – Jurassic Park",
        "Why do we fall? So we can learn to pick ourselves up. – Batman Begins",
        "You are who you choose to be. – Iron Giant",
        "Believe you can, then you will. – Lion King",
        "Nothing is impossible. – Into the Wild",
        "Stay gold. – The Outsiders",
        "Every man dies, not every man really lives. – Braveheart",
        "We accept the love we think we deserve. – Perks of Being a Wallflower",
        "It’s not who I am underneath, but what I do. – Batman Begins",
        "Don’t let anyone tell you what you can’t do. – Pursuit of Happyness"
    ],

    hero: [
        "I’m Batman. – The Dark Knight",
        "A hero can be anyone. – The Dark Knight Rises",
        "With great power comes great responsibility. – Spider-Man",
        "I can do this all day. – Captain America",
        "You either die a hero or live long enough to see yourself become the villain.",
        "It’s not about money, it’s about sending a message. – Batman",
        "Heroes are made by the path they choose. – Thor",
        "I am Iron Man.",
        "The night is darkest just before the dawn. – Batman",
        "You stand for something or you fall for anything.",
        "Justice is what we’re fighting for.",
        "I won’t kill you, but I don’t have to save you.",
        "Courage is fear holding on a minute longer.",
        "We wear the mask to protect the ones we love.",
        "Heroism isn’t flashy.",
        "I fight for those who can’t.",
        "Sometimes heroes are silent.",
        "Symbol matters more than the man. – Batman",
        "Strength comes from purpose.",
        "Heroes rise when the world falls."
    ],

    love: [
        "It wasn’t love at first sight. It took a full five minutes. – Pride & Prejudice",
        "You had me at hello. – Jerry Maguire",
        "Love is passion, obsession. – Meet Joe Black",
        "I wish I knew how to quit you. – Brokeback Mountain",
        "To me, you are perfect. – Love Actually",
        "The best love is the kind that awakens the soul. – The Notebook",
        "Love means never having to say you're sorry. – Love Story",
        "You make me want to be a better man. – As Good As It Gets",
        "I think I’d miss you even if we never met.",
        "You complete me.",
        "Love is composed of a single soul inhabiting two bodies.",
        "We loved with a love that was more than love.",
        "Whatever our souls are made of, his and mine are the same.",
        "Love is about finding someone who sees your chaos.",
        "Some people are worth melting for.",
        "I fell in love the way you fall asleep: slowly, then all at once.",
        "Love is not perfect but real.",
        "True love stories never have endings.",
        "Love is a choice, not a feeling.",
        "Love is when home becomes a person."
    ],

    villain: [
        "Why so serious? – Joker",
        "Introduce a little anarchy. – Joker",
        "Madness is like gravity. – Joker",
        "Smile, because it confuses people.",
        "I believe whatever doesn’t kill you simply makes you stranger.",
        "You can’t trust anyone these days.",
        "Sometimes the truth isn’t good enough.",
        "Chaos is fair.",
        "Villains are made, not born.",
        "I’m not a monster, I’m ahead of the curve.",
        "Everybody burns.",
        "The world deserves a better class of criminal.",
        "I’m an agent of chaos.",
        "Morality is a bad joke.",
        "Fear reveals true nature.",
        "They get what they deserve.",
        "I show people who they really are.",
        "Let the games begin.",
        "Power comes from fear.",
        "All it takes is one bad day."
    ]
};

const backgrounds = {
    motivation: "https://wallpapercave.com/wp/wp1837496.jpg",
    hero: "https://wallpapercave.com/wp/wp1808907.jpg",
    love: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    villain: "https://wallpapercave.com/wp/wp1945903.jpg"
};

function showCategory(category) {
    const randomQuote = quotes[category][Math.floor(Math.random() * quotes[category].length)];
    document.getElementById("quoteBox").innerText = randomQuote;
    document.getElementById("content").style.backgroundImage = `url(${backgrounds[category]})`;
}
