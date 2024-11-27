// Real-time validation for form fields
document.getElementById('contactForm').addEventListener('input', function(e) {
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const captcha = document.getElementById('captcha');
  const submitBtn = document.getElementById('submitBtn');

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    email.setCustomValidity('Please enter a valid email.');
  } else {
    email.setCustomValidity('');
  }

  // Check if phone number is valid
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone.value)) {
    phone.setCustomValidity('Please enter a valid phone number.');
  } else {
    phone.setCustomValidity('');
  }

  // Check captcha answer
  if (captcha.value !== '5') {
    captcha.setCustomValidity('Incorrect captcha answer.');
  } else {
    captcha.setCustomValidity('');
  }

  // Enable or disable submit button
  if (email.checkValidity() && phone.checkValidity() && captcha.checkValidity()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// Form submission with progress bar
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = '100%';
  setTimeout(function() {
    alert('Message sent successfully!');
    progressBar.style.width = '0%';
  }, 2000);
});

// Toggle FAQ answers
const faqToggles = document.querySelectorAll('.faq-toggle');
faqToggles.forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    const answer = toggle.nextElementSibling;
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  });
});







// Get the elements
const chatbotBtn = document.getElementById('chatbot-btn');
const chatWindow = document.getElementById('chat-window');
const closeChatBtn = document.getElementById('close-chat');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBody = document.getElementById('chat-body');

// Show/Hide the chat window when the button is clicked
chatbotBtn.addEventListener('click', () => {
  chatWindow.style.display = 'block';
  chatbotBtn.style.display = 'none';
});

// Close the chat window when the close button is clicked
closeChatBtn.addEventListener('click', () => {
  chatWindow.style.display = 'none';
  chatbotBtn.style.display = 'block';
});

// Function to display chat messages
function displayMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message');
  messageDiv.classList.add(sender + '-message');
  messageDiv.innerHTML = `<p>${message}</p>`;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the latest message
}

// Simulate a chatbot response
function botResponse(userMessage) {
  let response = "Sorry, I didn't understand that.";
  
  if (userMessage.toLowerCase().includes('hello')) {
    response = "Hi! How can I assist you today?";
  } else if (userMessage.toLowerCase().includes('hours')) {
    response = "Our office hours are from 9 AM to 6 PM, Monday to Friday.";
  } else if (userMessage.toLowerCase().includes('location')) {
    response = "You can visit us at Shoolini University, Solan, Himachal Pradesh.";
  }

  setTimeout(() => {
    displayMessage(response, 'bot');
  }, 1000);
}

// Handle sending the user's message
sendBtn.addEventListener('click', () => {
  const message = userInput.value.trim();
  if (message !== "") {
    displayMessage(message, 'user');
    userInput.value = "";
    botResponse(message);
  }
});

// Allow pressing Enter key to send message
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});
