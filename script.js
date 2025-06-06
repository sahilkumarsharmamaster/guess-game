const but1 = document.querySelector("#but1")
const placeholder = document.querySelector("#placeholder")
const para = document.querySelector(".para")
let comscore = 0;
let userscore = 0;

but1.addEventListener("click", () => {

 const compguess = Math.floor(Math.random() * 10)
 const userguess = Number(placeholder.value);

  if ( compguess === userguess) {
    userscore++;
    para.innerText = "congratulations! you guessed it right.🎉"
    para.style.color = "green";
    } else {
      comscore++;
      para.innerText = "You Lose!😞"
    para.style.color = "Red";
  }

  if (comscore === 1 || userscore === 1) {
    but1.innerText = "Play Again";
    but1.addEventListener("click", () => {
      location.reload();
    }, { once: true })
  }

});



