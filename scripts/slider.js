const sliderTrack = document.querySelector(".slider-track");
const sliderCards = document.querySelectorAll(".card");

// Duplicate cards to enable smooth infinite scroll
sliderCards.forEach((card) => {
  const clone = card.cloneNode(true);
  sliderTrack.appendChild(clone);
});

// Add event listener to reset the scroll position when animation completes
sliderTrack.addEventListener("animationiteration", () => {
  sliderTrack.style.transform = "translateX(0)";
});
