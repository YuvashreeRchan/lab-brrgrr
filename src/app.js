// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderTheButtons();
  renderIngredients();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById("cheese")
  if(state.Cheese)
  {
    cheese.style.display="block";
  }else{
    cheese.style.display="none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.getElementById("tomato")
  if(state.Tomatoes)
  {
    tomatoes.style.display="block";
  }else{
    tomatoes.style.display="none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.getElementById("onion")
  state.Onions ? onion.style.display ="inherit" : onion.style.display="none";
  }

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce")
  state.Lettuce ? lettuce.style.display ="inherit" : lettuce.style.display="none";
  }

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
let tomato_btn = document.querySelector(".btn-tomatoes");
tomato_btn.addEventListener("click", function() {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
});

// Trial 2 - Setup event listener for the onion button

let onion_btn = document.querySelector(".btn-onions");
onion_btn.addEventListener("click", function(){
  state.Onions=!state.Onions;
  renderAll();
});

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons 
//based on state
function renderTheButtons()
{
  document.querySelector(".btn-patty").addEventListener("click", () => 
  {
    state.Patty ? pattyButton.classList.remove("active") : pattyButton.classList.add("active");
  });

  document.querySelector(".btn-cheese").addEventListener("click", () => {
    if (!state.Cheese) {
      document.querySelector(".btn-cheese").classList.remove("active");
    } else {
      document.querySelector(".btn-cheese").classList.add("active");
    }
  });
  document.querySelector(".btn-tomatoes").addEventListener("click", () => {
    if (!state.Tomatoes) {
      document.querySelector(".btn-tomatoes").classList.remove("active");
    } else {
      document.querySelector(".btn-tomatoes").classList.add("active");
    }
  });

  document.querySelector(".btn-onions").classList.toggle("active",state.Onions);
  document.querySelector(".btn-lettuce").classList.toggle("active",state.Lettuce);

}

//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredients() {
  const items = document.querySelectorAll(".items");
  items.forEach(item => {
    item.style.visibility = state[item.textContent] ? "visible" : "hidden";
  });
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

let basePrice = 2 * wholeWheatBun;

function renderPrice() {
  let price = basePrice;
  for(let ingre in state){
    if(state[ingre]){
      price +=ingredients[ingre];
    }
  }
  document.querySelector(".price-details").innerText = "INR " + price;
}