function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    if(username === '' || username.length < 3) {
        alert('Username must be at least 3 characters long.');
    }

    const emailPattern = /^[azAZ09]+@[azAZ09]+.[azAZ]{2,6}$/;
    if(!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
    }

    if(password === '' || password.length < 8) {
        alert("Password must be at least 8 characters long.");
    }
    // if(password ===password2){
    //     alert("Password must match");
    // }
}