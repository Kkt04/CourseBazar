document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        window.location.href = './index.html';
    } else {
        alert('Please fill in both fields.');
    }
   alert("Login Successfully")
});