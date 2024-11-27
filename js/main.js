var quotes = [
    {
        quote: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde',
        photo: 'images/gettyimages-56217307-594x594.jpg'
    },
    {
        quote: 'Without music, life would be a mistake.',
        author: 'Friedrich Nietzsche',
        photo: 'images/gettyimages-1354481424-594x594.jpg'
    },
    {
        quote: 'There is no surer foundation for a beautiful friendship than a mutual taste in literature.',
        author: 'P.G. Wodehouse',
        photo: 'images/gettyimages-613472912-594x594.jpg'
    },
    {
        quote: 'Whatever this is that I am, it is flesh and a little spirit and an intelligence.',
        author: 'Marcus Aurelius',
        photo: 'images/gettyimages-1213643358-170667a.jpg'
    },
    {
        quote: 'God is terrible, and God is merciful. Bedivere, how could I ever forget that God is merciful?',
        author: 'Lev Grossman',
        photo: 'images/https___www.shutterstock.com_editorial_image-editorial_M4T4If23MfDfU801ODcxMTU=_author-lev-grossman-on-brooklyn-bridge-facing-1500w-12500330a.jpg'
    },
    {
        quote: 'Be the change that you wish to see in the world.',
        author: 'Mahatma Gandhi',
        photo: 'images/gettyimages-102701091-594x594.jpg'
    },
    {
        quote: 'It is better to be hated for what you are than to be loved for what you are not',
        author: 'Andre Gide',
        photo: 'images/gettyimages-515467646-594x594.jpg'
    },
    {
        quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
        author: 'Ralph Waldo Emerson',
        photo: 'images/istockphoto-1177765539-1024x1024.jpg'
    }
];

document.getElementById("btn").onclick = generate;
var nullRandom = null;

function generate() {
    var random;
    do {
        random = Math.floor(Math.random() * quotes.length);
    } while (random === nullRandom) {
        nullRandom = random;
    }
    
    document.getElementById("quote").innerHTML = quotes[random].quote;
    document.getElementById("author").innerHTML = quotes[random].author;
    document.getElementById("image").src = quotes[random].photo;
}

