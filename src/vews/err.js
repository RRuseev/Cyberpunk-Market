 export function showErrorNotification(message) {
    const errorBox = document.getElementById('errorBox');
    const errorMessage = errorBox.querySelector('.msg');
  
    // Update error message content
    errorMessage.textContent = message;
  
    // Show the error box
    errorBox.style.display = 'block';
  
    // Optionally, add a timeout to hide the error message automatically (replace 3000 with desired duration in milliseconds)
    setTimeout(() => {
      errorBox.style.display = 'none';
    }, 3000);
  }
  