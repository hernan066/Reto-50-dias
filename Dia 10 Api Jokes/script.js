const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

 async function generateJoke() {
 
 const res = await fetch("https://icanhazdadjoke.com", {headers: {Accept: "application/json"}});
 const data = await res.json();
 
 jokeElement.innerHTML = data.joke;
};

