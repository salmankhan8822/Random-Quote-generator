let quotes = [
  {
    Author: "salman",
    Quote: "Practice makes a man perpect",
    Year: "2025",
  },
  {
    Author: "Ali",
    Quote: "Something is better than nothing",
    Year: "2022",
  },
  {
    Author: "Bazid",
    Quote: "Don’t let yesterday take up too much of today.",
    Year: "2000",
  },
  {
    Author: "Ahmed",
    Quote: "Hard times create strong men, strong men create good times.",
    Year: "2017",
  },
  {
    Author: "Raze",
    Quote: "Great things never come from comfort zones.",
    Year: "2015",
  },
];

let Btn = document.getElementById("Btn");
let quoteBox = document.getElementById("quoteBox");

Btn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  quoteBox.innerHTML = `<p><strong style="color: black;">Author:</strong> ${randomQuote.Author}</p>
  <h2><strong style="color: black;">Quote:</strong> ${randomQuote.Quote}</h2>
  <h3><strong style="color: black;">Year:</strong> ${randomQuote.Year}</h3>`;
});
