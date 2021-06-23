const button = document.querySelector("button");
const title = document.querySelector("h1");
const titleTwo = document.querySelector("h2");


button.addEventListener("click", () => {
  const newColor = MakeRandomColor();
  document.body.style.backgroundColor = newColor;
  title.innerText = "Here's your color"
  titleTwo.innerText = newColor;
  button.innerText = "Click me again to get a different one"
})


function MakeRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  if (r < 150 && g < 150 && b < 150 ){
    title.style.color = "white";
    titleTwo.style.color = "white";
    button.style.color = "white";
  }else{
    title.style.color = "black";
    titleTwo.style.color = "black";
    button.style.color = "black";
  }
  return `rgb(${r}, ${g}, ${b})`;
}








