const quoteData = {
    love: {
        bg: "https://images.unsplash.com/photo-1516589174184-c68526514b4c?q=80&w=1974&auto=format&fit=crop", // The Notebook vibe
        quotes: [
            { text: "I want all of you, forever, you and me, every day.", movie: "The Notebook" },
            { text: "To me, you are perfect.", movie: "Love Actually" },
            { text: "I wish I had done everything on earth with you.", movie: "The Great Gatsby" },
            { text: "You make me want to be a better man.", movie: "As Good as It Gets" },
            { text: "It was a million tiny little things...", movie: "Sleepless in Seattle" },
            { text: "You should be kissed and often, and by someone who knows how.", movie: "Gone with the Wind" },
            { text: "I’m also just a girl, standing in front of a boy, asking him to love her.", movie: "Notting Hill" },
            { text: "Death cannot stop true love. All it can do is delay it for a while.", movie: "The Princess Bride" },
            { text: "I am who I am because of you.", movie: "The Notebook" },
            { text: "Our love is like the wind. I can’t see it, but I can feel it.", movie: "A Walk to Remember" },
            { text: "You had me at hello.", movie: "Jerry Maguire" },
            { text: "So it’s not gonna be easy. It’s going to be really hard.", movie: "The Notebook" },
            { text: "Medicine, law, business, engineering... but poetry, beauty, romance, love, these are what we stay alive for.", movie: "Dead Poets Society" },
            { text: "Whatever our souls are made of, his and mine are the same.", movie: "After" },
            { text: "Winning that ticket, Rose, was the best thing that ever happened to me.", movie: "Titanic" },
            { text: "I would rather share one lifetime with you than face all the ages of this world alone.", movie: "Lord of the Rings" },
            { text: "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.", movie: "Unknown" },
            { text: "I love you. I knew it the minute I met you.", movie: "Silver Linings Playbook" },
            { text: "Everything I do, I do it for you.", movie: "Robin Hood" },
            { text: "You are my greatest adventure.", movie: "The Incredibles" }
        ]
    },
    hero: {
        bg: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1974&auto=format&fit=crop", // Superman/Man of Steel vibe
        quotes: [
            { text: "It's not who I am underneath, but what I do that defines me.", movie: "Batman Begins" },
            { text: "With great power comes great responsibility.", movie: "Spider-Man" },
            { text: "You're much stronger than you think you are. Trust me.", movie: "All-Star Superman" },
            { text: "I can do this all day.", movie: "Captain America" },
            { text: "You will travel far, my little Kal-El.", movie: "Man of Steel" },
            { text: "Part of the journey is the end.", movie: "Avengers: Endgame" },
            { text: "I think a hero is an ordinary individual who finds strength to persevere.", movie: "Superman" },
            { text: "The world is changed by your example, not by your opinion.", movie: "Unknown" },
            { text: "A hero can be anyone.", movie: "The Dark Knight Rises" },
            { text: "It’s not about how much we lost. It’s about how much we have left.", movie: "Avengers" },
            { text: "No man can win every battle, but no man should fall without a struggle.", movie: "Spider-Man" },
            { text: "Great men are not born great, they grow great.", movie: "The Godfather" },
            { text: "Even a happy life cannot be without a measure of darkness.", movie: "Superman" },
            { text: "Heroes are made by the paths they choose, not the powers they are graced with.", movie: "Iron Man" },
            { text: "Whatever happens tomorrow, you must promise me one thing. That you will stay who you are.", movie: "Captain America" },
            { text: "Sometimes the truth isn't good enough.", movie: "The Dark Knight" },
            { text: "There is a right and a wrong in the universe, and the distinction is not hard to make.", movie: "Superman" },
            { text: "Faith is my sword. Truth is my shield.", movie: "Unknown" },
            { text: "Being a hero doesn't mean you're invincible. It means you're brave enough to stand up.", movie: "Unknown" },
            { text: "I choose to be a hero.", movie: "Spider-Man" }
        ]
    },
    villain: {
        bg: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2037&auto=format&fit=crop", // Joker vibe
        quotes: [
            { text: "If you're good at something, never do it for free.", movie: "The Dark Knight" },
            { text: "Introduce a little anarchy. Upset the established order.", movie: "The Dark Knight" },
            { text: "Why so serious?", movie: "The Dark Knight" },
            { text: "Some men just want to watch the world burn.", movie: "The Dark Knight" },
            { text: "I'm not a monster. I'm just ahead of the curve.", movie: "The Dark Knight" },
            { text: "The only sensible way to live in this world is without rules.", movie: "Joker" },
            { text: "Madness is like gravity. All it takes is a little push.", movie: "The Dark Knight" },
            { text: "Whatever doesn't kill you, simply makes you stranger.", movie: "The Dark Knight" },
            { text: "You either die a hero or you live long enough to see yourself become the villain.", movie: "The Dark Knight" },
            { text: "I used to think my life was a tragedy, but now I realize, it’s a comedy.", movie: "Joker" },
            { text: "Do I really look like a guy with a plan?", movie: "The Dark Knight" },
            { text: "The night is darkest just before the dawn.", movie: "The Dark Knight" },
            { text: "I’m a man of my word.", movie: "The Dark Knight" },
            { text: "Wait 'til they get a load of me.", movie: "Batman 1989" },
            { text: "I have given a name to my pain, and it is Batman.", movie: "Joker" },
            { text: "Let's put a smile on that face!", movie: "The Dark Knight" },
            { text: "To them, you’re just a freak, like me!", movie: "The Dark Knight" },
            { text: "A little rebellion now and then is a good thing.", movie: "Unknown" },
            { text: "Power is when we have every justification to kill, and we don't.", movie: "Schindler's List" },
            { text: "Forgiveness is between them and God. It's my job to arrange the meeting.", movie: "Man on Fire" }
        ]
    },
    motivation: {
        bg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", // Raging Bull vibe
        quotes: [
            { text: "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.", movie: "Rocky Balboa" },
            { text: "If I can change, and you can change, everybody can change!", movie: "Rocky IV" },
            { text: "Don't let anyone ever make you feel like you don't deserve what you want.", movie: "10 Things I Hate About You" },
            { text: "Do, or do not. There is no try.", movie: "Star Wars" },
            { text: "Every man dies, not every man really lives.", movie: "Braveheart" },
            { text: "The loud voice in your head is just a voice.", movie: "Raging Bull" },
            { text: "I'm the boss, I'm the boss, I'm the boss.", movie: "Raging Bull" },
            { text: "Just keep swimming.", movie: "Finding Nemo" },
            { text: "Carpe diem. Seize the day, boys. Make your lives extraordinary.", movie: "Dead Poets Society" },
            { text: "Life moves pretty fast.", movie: "Ferris Bueller's Day Off" },
            { text: "Greatness is not this ivory power. It's something that actually exists in all of us.", movie: "Unknown" },
            { text: "Believe in yourself. Not for them, but for you.", movie: "Unknown" },
            { text: "The more you sweat in training, the less you bleed in combat.", movie: "Raging Bull" },
            { text: "To find something, anything, a great truth or a lost toothbrush, you must first look for it.", movie: "Unknown" },
            { text: "Your limit is only your imagination.", movie: "Unknown" },
            { text: "Don't ever let somebody tell you you can't do something.", movie: "The Pursuit of Happyness" },
            { text: "The way it works is, you do the thing you’re scared of, and you get the courage after you do it.", movie: "Unknown" },
            { text: "Stay hungry, stay foolish.", movie: "Steve Jobs" },
            { text: "Go the distance.", movie: "Rocky" },
            { text: "The dream is real.", movie: "Inception" }
        ]
    }
};

let currentCategory = 'love';

function setCategory(cat) {
    currentCategory = cat;
    
    // Update active button UI
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase() === cat) btn.classList.add('active');
    });

    // Update Background
    document.getElementById('body-bg').style.backgroundImage = `url('${quoteData[cat].bg}')`;
    
    nextQuote();
}

function nextQuote() {
    const quotes = quoteData[currentCategory].quotes;
    const randomIdx = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIdx];

    const textEl = document.getElementById('quote-text');
    const movieEl = document.getElementById('movie-title');

    // Fade out
    textEl.style.opacity = 0;
    movieEl.style.opacity = 0;

    setTimeout(() => {
        textEl.innerText = `"${quote.text}"`;
        movieEl.innerText = `- ${quote.movie}`;
        textEl.style.opacity = 1;
        movieEl.style.opacity = 1;
    }, 400);
}

// BUTTON FUNCTIONS
function copyQuote() {
    const text = document.getElementById('quote-text').innerText;
    const movie = document.getElementById('movie-title').innerText;
    navigator.clipboard.writeText(`${text} ${movie}`);
    alert("Quote copied to clipboard!");
}

function shareQuote() {
    const text = document.getElementById('quote-text').innerText;
    if (navigator.share) {
        navigator.share({ title: 'Cinematic Vibes', text: text, url: window.location.href });
    } else {
        alert("Sharing not supported on this browser. Copy the link instead!");
    }
}

function saveQuote() {
    const text = document.getElementById('quote-text').innerText;
    const movie = document.getElementById('movie-title').innerText;
    const blob = new Blob([`${text}\n${movie}`], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'quote.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
}

// Initialize
window.onload = () => setCategory('love');
