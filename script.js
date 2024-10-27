// Function to sign up a new user
function signup() {
    const username = document.getElementById('signupuser').value;
    const password = document.getElementById('signuppass').value;

    if (!username || !password) {
        document.getElementById('signupMessage').textContent = 'Please fill in all fields!';
        return;
    }

    // Check if the user already exists
    if (localStorage.getItem(username)) {
        document.getElementById('signupMessage').textContent = 'Username already exists! Try a different one.';
        return;
    }

    // Store the user details in localStorage
    localStorage.setItem(username, password);
    document.getElementById('signupMessage').textContent = 'Account created successfully! Redirecting to login...';

    // Redirect to the login page after 2 seconds
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Function to log in a user
function login() {
    const username = document.getElementById('loginuser').value;
    const password = document.getElementById('loginpass').value;

    if (!username || !password) {
        document.getElementById('loginMessage').textContent = 'Please enter your username and password!';
        return;
    }

    // Retrieve the stored password for the given username
    const storedPassword = localStorage.getItem(username);

    // Check if the username exists and the password matches
    if (storedPassword === password) {
        document.getElementById('loginMessage').textContent = 'Login successful! Redirecting...';

        // Redirect to a welcome or dashboard page
        setTimeout(() => {
            window.location.href = 'welcome.html'; // Create a welcome.html page
        }, 2000);
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password!';
    }
}
