"use strict";

const sections=document.querySelectorAll("section");
const buttons= document.querySelectorAll("button");

function changeContent(index){
    
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("display");
        sections[i].classList.remove("opacity");
        buttons[i].classList.remove("active");
    };

    var element = document.querySelectorAll("section")[index];
    element.classList.add("display");
    buttons[index].classList.add("active");

    setTimeout(function(){
        sections[index].classList.add("opacity")
    }, 100)
};