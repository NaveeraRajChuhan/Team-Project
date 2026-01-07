document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your appointment has been booked successfully!");
});




// ---------------------------------------section 6------------




const card = document.querySelector('.unique-card');

card.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset on leave
card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = "all 0.5s ease";
});

card.addEventListener('mouseenter', () => {
    card.style.transition = "none";
});

















const marquee = document.querySelector('.marquee-container');
const circle = document.getElementById('cursor-image');

marquee.addEventListener('mousemove', (e) => {
  // Get the X and Y coordinates of the mouse
  const x = e.clientX;
  const y = e.clientY;

  // Position the circle (subtracting 75px to center it on cursor)
  circle.style.left = `${x - 75}px`;
  circle.style.top = `${y - 75}px`;
  
  // Unique Graphic: Rotate text slightly based on mouse speed
  const speed = Math.abs(e.movementX);
  document.querySelector('.marquee-content').style.skewX = `${speed / 10}deg`;
});

// Slow down the marquee when hovering for better readability
marquee.addEventListener('mouseenter', () => {
    document.querySelector('.marquee-content').style.animationPlayState = 'paused';
});

marquee.addEventListener('mouseleave', () => {
    document.querySelector('.marquee-content').style.animationPlayState = 'running';
});





// -----------------------------------------------------wheel--
window.addEventListener('scroll', function() {
    const wheel = document.querySelector('.rotating-wheel svg');
    let value = window.scrollY;
    // This adds extra rotation speed as the user scrolls
    wheel.style.transform = `rotate(${value * 0.2}deg)`;
});