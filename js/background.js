const linkHome = document.querySelector("#home")
const linkUniverse = document.querySelector("#universe")
const linkExplorer = document.querySelector("#explorer")

linkHome.addEventListener("click", () => {
  document.documentElement.classList.remove("universe");
  document.documentElement.classList.remove("explorer");
  document.documentElement.classList.add("home");
})

linkUniverse.addEventListener("click", () => {
  document.documentElement.classList.add("universe");
  document.documentElement.classList.remove("explorer");
  document.documentElement.classList.remove("home");
})

linkExplorer.addEventListener("click", () => {
  document.documentElement.classList.remove("universe");
  document.documentElement.classList.add("explorer");
  document.documentElement.classList.remove("home");
})




