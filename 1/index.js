window.onload = function() {
  let body = document.getElementsByTagName("body")[0];
  let calculator_div = document.createElement("div");
  let input = document.createElement("input");
  let flex_container_div = document.createElement("div");

  //create a array to contain all of the symbolics on button
  let symbolics = ["(", ")", "±", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "C", "="];

  //set attribute for all of the calculator
  calculator_div.id += "calculator";
  input.setAttribute("type", "text");
  input.setAttribute("disabled", "disabled");
  input.setAttribute("placeholder", "0");
  flex_container_div.className += "flex-container";

  body.appendChild(calculator_div);
  calculator_div.appendChild(input);
  calculator_div.appendChild(flex_container_div);

  // set style for calcuator div
  calculator_div.style.width = "250px";
  calculator_div.style.fontSize = "100%";
  calculator_div.style.border = "1px solid black";
  calculator_div.style.padding = "10px";
  calculator_div.style.borderRadius = "7px";
  calculator_div.style.border = "1px solid black";
  calculator_div.style.marginLeft = "auto";
  calculator_div.style.marginRight = "auto";
  calculator_div.style.fontFamily = "Verdana";

  // loop to generate all of buttons
  symbolics.forEach(function (item) {
    let button = document.createElement("button");

    button.className += "flex-item";
    button.innerHTML += item;

    flex_container_div.appendChild(button);
  });

  // set style for all of the input tag
  let inputs = document.getElementsByTagName("input");

  for(let i = 0; i < inputs.length; i++) {
    if(inputs[i].getAttribute("type") == "text") {
      inputs[i].style.fontSize = "2em";
      inputs[i].style.textAlign = "right";
      inputs[i].style.borderRadius = "5px";
      inputs[i].style.width = "240px";
      inputs[i].style.height = "35px";
      inputs[i].style.marginBottom = "10px";
      inputs[i].style.padding = "1%";
    }
  }

  // set style for all of the button tag
  let buttons = document.getElementsByTagName("button");

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].style.fontSize = "1.1em";
    buttons[i].style.borderRadius = "5px";
    buttons[i].style.width = "50px";
  }

  // set style for all of the divs with flex-container class
  let flex_containers = document.getElementsByClassName("flex-container");

  for(let i = 0; i < flex_containers.length; i++) {
    flex_containers[i].style.display = "inline-flex";
    flex_containers[i].style.flexFlow = "row wrap";
    flex_containers[i].style.justifyContent = "space-between";
  }

  // set style for all of the divs with flex-item class
  let flex_items = document.getElementsByClassName("flex-item");

  for(let i = 0; i < flex_items.length; i++) {
    flex_items[i].style.textAlign = "center";
    flex_items[i].style.padding = ".5em";
    flex_items[i].style.fontSize = "1em";
    flex_items[i].style.flexGrow = "1";
    flex_items[i].style.margin = "0 5px 5px 0";
  }
}
