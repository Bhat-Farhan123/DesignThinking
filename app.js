// Select the hamburger and nav-links elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on the nav-links to open/close the menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



// Toggle the dropdown menu visibility for WhatsApp Groups
document.getElementById('whatsappBtn').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('whatsappDropdownMenu');
    // Toggle the 'show' class to show/hide the cards
    dropdownMenu.classList.toggle('show');
});



const Cardbutton = document.getElementById('clubBtn');
const cardsContainer = document.getElementById('cards-container');

Cardbutton.addEventListener('click', () => {
  // Toggle visibility
  if (cardsContainer.style.display === 'none' || cardsContainer.style.display === '') {
    cardsContainer.style.display = 'flex';
    Cardbutton.textContent = 'Hide Clubs';
  } else {
    cardsContainer.style.display = 'none';
    Cardbutton.textContent = 'Show Clubs';
  }
});


//news  : news js is in news.js file












    
    
    
    

    