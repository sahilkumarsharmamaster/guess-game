const but1 = document.querySelector("#but1")
const placeholder = document.querySelector("#placeholder")
const para = document.querySelector(".para")

but1.addEventListener("click", () => {

 const compguess = Math.floor(Math.random() * 10)
 const userguess = Number(placeholder.value);

  if ( compguess === userguess) {
    para.innerText = "You won 🎉"
    para.style.color = "green";
    } else {
      para.innerText = "You Lose!😞"
      para.style.color = "Red";
    }
}
)




