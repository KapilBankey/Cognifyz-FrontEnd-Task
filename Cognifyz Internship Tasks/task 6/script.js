const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    nameError.style.display = 'block';
    valid = false;
  } else {
    nameError.style.display = 'none';
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block';
    valid = false;
  } else {
    emailError.style.display = 'none';
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long.';
    passwordError.style.display = 'block';
    valid = false;
  } else {
    passwordError.style.display = 'none';
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});
