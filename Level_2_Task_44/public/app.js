if(localStorage.getItem('auth_token')){
    // Get the raw JWT token from localStorage
    const token = localStorage.getItem('auth_token');
  
    // Get the decoded user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user_data'));
  
    // Use the decoded data (e.g., access user details)
    console.log(userData); // Contains the decoded payload (user information)
  }
  
  // Check if the user is logged in by checking the token in localStorage
  if (!localStorage.getItem('auth_token')) {
    // If no token, redirect to the login page
    window.location.href = 'index.html';
  }
  
  // Logout button functionality
  document.getElementById('logout-btn').addEventListener('click', () => {
    // Remove the token and user data from localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    
    // Optionally, alert the user
    alert('You have logged out.');
  
    // Redirect the user to the login page after logout
    window.location.href = 'index.html';
  });
  