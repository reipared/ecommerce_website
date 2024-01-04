//    This JavaScript code controls the visibility of the menu on an e-commerce website. It toggles the menu's visibility when the close button or hamburger menu icon is clicked.

// Select the elements from the DOM
const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");

// Add event listeners to the close button and hamburger menu icon to toggle the menu's visibility when clicked.
close.addEventListener("click", () => {
	// Hide the menu when the close button is clicked
	menu.style.visibility = "hidden";
});

// Add event listener to the hamburger menu icon to toggle the menu's visibility when clicked.
open.addEventListener("click", () => {
	// Show the menu when the hamburger menu icon is clicked
	menu.style.visibility = "visible";
});
