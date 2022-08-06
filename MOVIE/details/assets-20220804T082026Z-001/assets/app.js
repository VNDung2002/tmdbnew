// add hovered class to selected list item
let list = document.querySelectorAll(".item2-hover");
console.log("item2-hover",list);
function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));