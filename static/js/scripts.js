/*
  Toggle hamburger menu
*/

// Get the elements we wish to change
let hamburger = document.querySelector('.hamburger');
let siteMenu = document.querySelector('.nav-menu');

// Add a click even listener
hamburger.addEventListener('click', handleMenu);

// Function to toggle the menu
function handleMenu(){
  siteMenu.classList.toggle('active');
}

/*

  Close the menu once a link has been clicked

*/

// Get all links in the nav
let navLinks = document.querySelectorAll('.nav-link');

// Set an event listener for each link
navLinks.forEach(n => n.addEventListener('click', closeMenu));

// Now close the menu after the link has been clicked
function closeMenu(){
  siteMenu.classList.remove('active');
}
