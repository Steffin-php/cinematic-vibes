const quotes = [
    {
        text: "The things you own end up owning you.",
        movie: "Fight Club"
    },
    {
        text: "Hope is a good thing, maybe the best of things.",
        movie: "The Shawshank Redemption"
    },
    {
        text: "I'm going to make him an offer he can't refuse.",
        movie: "The Godfather"
    },
    {
        text: "Why do we fall? So that we can learn to pick ourselves up.",
        movie: "Batman Begins"
    },
    {
        text: "Carpe diem. Seize the day, boys.",
        movie: "Dead Poets Society"
    }
];

const quoteText = document.getElementById('quote-text');
const movieName = document.getElementById('movie-name');
const nextBtn = document.getElementById('next-btn');

function getRandomQuote() {
    // Add a simple fade-out effect
    quoteText.style.opacity = 0;
    movieName.style.opacity = 0;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.innerText = `"${quotes[randomIndex].text}"`;
        movieName.innerText = `- ${quotes[randomIndex].movie}`;
        
        // Fade back in
        quoteText.style.opacity = 1;
        movieName.style.opacity = 1;
    }, 500);
}

// Initial Call
getRandomQuote();

nextBtn.addEventListener('click', getRandomQuote);
