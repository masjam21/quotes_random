"use strict";

const quoteTxt = document.querySelector(".quote");
const btnQuote = document.querySelector(".btn-quote");
const authorEl = document.querySelector(".author");
const speechEl = document.querySelector(".speech");
const copyEl = document.querySelector(".copy");
const twitterEl = document.querySelector(".twitter");
const messageEl = document.querySelector(".message");

// ''''''''''''''''''''''''''''''''''random quote''''''''''''''''''''''''''
async function randomQuote() {
  const data = await fetch("https://api.quotable.io/random")
  const result = await data.json();
  console.log(result);  
}


btnQuote.addEventListener("click", randomQuote);