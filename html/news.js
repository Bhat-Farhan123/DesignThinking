// Select the hamburger and nav-links elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on the nav-links to open/close the menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});





// heading and paragraph



document.addEventListener("DOMContentLoaded", () => {
  // Handle headings
  const headings = document.querySelectorAll(".news-card-heading");

  headings.forEach((heading) => {
    const fullHeading = heading.getAttribute("data-full-heading");
    const shortHeading = heading.textContent.trim();

    heading.addEventListener("click", () => {
      if (heading.textContent.trim() === shortHeading) {
        heading.textContent = fullHeading;
      } else {
        heading.textContent = shortHeading;
      }
    });
  });

  // Handle paragraphs
  const paragraphs = document.querySelectorAll(".news-card-text");

  paragraphs.forEach((paragraph) => {
    const fullText = paragraph.getAttribute("data-full-text");
    const shortText = paragraph.textContent.trim();

    paragraph.addEventListener("click", () => {
      if (paragraph.textContent.trim() === shortText) {
        paragraph.textContent = fullText;
      } else {
        paragraph.textContent = shortText;
      }
    });
  });
});
