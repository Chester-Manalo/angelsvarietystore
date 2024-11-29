//mobile menu onclick
  const hamburger = document.querySelector('.hamburger');
  const barMenu = document.querySelector('.bar-overlay-menu');

  hamburger.addEventListener('click', () => 
  {
    barMenu.classList.toggle('active'); // Toggle the "active" class
    console.log('Hamburger clicked!'); // Debugging log
  });

//newsletter submit onclick
  async function submitNewsletter() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  if (!email)
  {
    alert('Please enter an email address.');
    return;
  }

  if (!validateEmail(email)) 
  {
    alert('Please enter a valid email address.');
    return;
  }

  try 
  {
    const response = await mockSubmitToServer(email);

    if (response.success) 
    {
      alert('Thank you for signing up!');
      emailInput.value = ''; 
    } 
    else 
    {
      alert('Failed to submit. Please try again.');
    }
  } 
  catch (error) 
  {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
}

function validateEmail(email) 
{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function mockSubmitToServer(email) {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log(`Submitted email: ${email}`);
          resolve({ success: true });
      }, 1000);
  });

//support form fill up onclick submit
function submitForm() {
  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate inputs
  if (!name) {
      alert('Please enter your name.');
      return;
  }

  if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  if (!message) {
      alert('Please enter your message.');
      return;
  }

  // Simulate form submission
  alert(`Thank you, ${name}. Your message has been submitted!`);
  
  // Clear the form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


}



