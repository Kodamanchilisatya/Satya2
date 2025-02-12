document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let aadhar = document.getElementById("aadhar").value;
    let pan = document.getElementById("pan").value;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phonePattern = /^[0-9]{10}$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let aadharPattern = /^[0-9]{12}$/;
    let panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    let isValid = true;

    // Email Validation
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format!";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Phone Number Validation
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must be 10 digits!";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }

    // Password Validation
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = "Must include letters, numbers & special chars!";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    // Date of Birth Validation & Age Calculation
    if (!dob) {
        document.getElementById("dobError").innerText = "Please enter your date of birth!";
        isValid = false;
    } else {
        document.getElementById("dobError").innerText = "";
        let birthDate = new Date(dob);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        document.getElementById("ageDisplay").innerText = "Your age: " + age;
    }

    // Aadhar Number Validation
    if (!aadharPattern.test(aadhar)) {
        document.getElementById("aadharError").innerText = "Aadhar must be 12 digits!";
        isValid = false;
    } else {
        document.getElementById("aadharError").innerText = "";
    }

    // PAN Card Validation
    if (!panPattern.test(pan)) {
        document.getElementById("panError").innerText = "Invalid PAN format!";
        isValid = false;
    } else {
        document.getElementById("panError").innerText = "";
    }

    // If all fields are valid
    if (isValid) {
        alert("Registration Successful!");
    }
});
