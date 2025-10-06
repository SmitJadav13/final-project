


document.querySelectorAll('.menu-list li').forEach(item => {
  item.addEventListener('click', function() {
    const selectedItem = this.getAttribute('data-item');
    document.getElementById('selectedItem').textContent = selectedItem;
  });
});


document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.querySelector('#name').value.trim();
  const email = this.querySelector('#email').value.trim();
  const message = this.querySelector('#message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  
  this.querySelector('button[type="submit"]').disabled = true;
  this.querySelector('button[type="submit"]').textContent = 'Sending...';

  setTimeout(() => {
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
    this.querySelector('button[type="submit"]').disabled = false;
    this.querySelector('button[type="submit"]').textContent = 'Send';
  }, 1500);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'btn btn-primary position-fixed';
backToTopBtn.style.cssText = 'bottom: 20px; right: 20px; display: none; z-index: 1000;';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
