const bigbox = document.querySelector(".bigbox");
const twoface = document.querySelectorAll(".card");
let card1, card2;
let final = 0;
let score = 0;
twoface.forEach((card) => {
  card.addEventListener("click", addclass);
  score++;
});

function addclass() {
  if (this.classList.contains("tourn")) return;
  this.classList.add("tourn");
  if (!card1) {
    card1 = this;
  } else if (!card2) {
    card2 = this;
    match();
  }
}

function match() {
  let img1 = card1.firstElementChild.src;
  let img2 = card2.firstElementChild.src;

  if (img1 === img2) {
    card1 = null;
    card2 = null;
    final++;

    console.log(final);
  } else {
    setTimeout(() => {
      card1.classList.remove("tourn");
      card2.classList.remove("tourn");
      card1 = null;
      card2 = null;
    }, 300);
  }

  if (final >= 12) {
    gameover();
  }
}

twoface.forEach((card) => {
  let rnd = Math.floor(Math.random() * 24);
  card.style.order = rnd;
});
function gameover() {
  setTimeout(() => {
    bigbox.style.transform = "rotate(180deg)";
    
    bigbox.innerHTML = "winner winner vegetables dinner! " + " your score is : " + score;
    box.style.color = "white";  
    box.style.fontSize = "10rem"; 
    box.style.fontWeight = "bold"; 
    box.style.textAlign = "center"; 
    box.style.padding = "200px";
  }, 500);
}
