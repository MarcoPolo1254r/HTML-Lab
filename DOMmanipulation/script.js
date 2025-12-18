// const container = document.querySelector("#bestDiv");

// const addingContent = document.createElement("div");
// addingContent.classList.add("content");
// addingContent.textContent = "This is just the beggining";

// const creatingP = document.createElement("p");
// const creatingH3 = document.createElement("h3");
// const creatingInnerDiv = document.createElement("div");
// const creatingH1 = document.createElement("h1");
// const creatingInnerP = document.createElement("p");

// creatingP.textContent = "Hey, I`m red";
// creatingH3.textContent = "Hey, I`m a blue h3";
// creatingH1.textContent = "I`m inside a div"
// creatingInnerP.textContent = "ME TOO!!!!"

// creatingP.style.color = "red";
// creatingH3.style.color = "blue";

// creatingInnerDiv.style.cssText = "backgroud-color: pink; border: 5px solid black"

// creatingInnerDiv.append(creatingH1,creatingInnerP)

// container.append(creatingP,creatingH3,creatingInnerDiv)

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click",() => console.log (alert(btn.id)))
})
// btn.addEventListener("click",(e) => console.log (e.target.style.background = "blue"))