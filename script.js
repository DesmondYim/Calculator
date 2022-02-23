window.onload = function() {
    // store first num when operator clicked
    let result = "";

    const textbox = document.createElement("div");
    textbox.classList.add("textbox");
    textbox.textContent = result;


    const container = document.querySelector(".container");
    const space = document.querySelector("br");
    container.insertBefore(textbox, space);

    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const clear = document.querySelector("#clear");

    // when numbers pressed, add to textbox


    // store operator when clicked
    // document.querySelector(".operate") => for operator buttons
    // document.querySelector(element.HtmlElement) => for individual operators

    // let operatorBtn = document.querySelector(".operatorBtn"); 
    // operatorBtn.addEventListener("click", () => {
    //     return operator = 
    // })
    // // create operate function
    // function operate() {
    //     return Number(firstNum) operator
    // }

    // create result from operation


}