function sendOTP() {
    const email = document.querySelector("#email"); // Get email input field
    const otp = document.querySelector(".otp");
    const OTPinp = document.querySelector("#OTPinp");
    const OTPcheck = document.querySelector("#OTPcheck");
    const cross = document.querySelector(".fa-circle-xmark");
    const OTPbtn = document.querySelector(".OTPbtn");

    if (!email.value) {
        alert("Please enter a valid email address!");
        return;
    }

    OTP_val = Math.floor(1000 + Math.random() * 9000); // Ensure 4-digit OTP
    let emailbody = `<h2>Your OTP is </h2>${OTP_val}`;

    console.log("Sending OTP to:", email.value); // Debugging

    Email.send({
        SecureToken: "e94c2c73-2fba-4949-9820-a81253313ed3",
        To: email.value,  // Ensure the entered email is used
        From: "shyam73245@gmail.com",
        Subject: "OTP for Password Reset",
        Body: emailbody,
    }).then((message) => {
        console.log("EmailJS Response:", message); // Debugging

        if (message == "OK") {
            alert("OTP sent to your email " + email.value);
            otp.style.display = "flex";

            OTPcheck.addEventListener("click", () => {
                if (OTPinp.value == OTP_val) {
                    alert("Email address verified");
                } else {
                    alert("Invalid OTP");
                    OTPinp.style.border = "2px solid red";
                    cross.style.display = "flex";
                    OTPbtn.style.left = "-5px";
                }
            });
        } else {
            alert("Failed to send OTP. Please check your email.");
        }
    }).catch((error) => {
        console.error("Error sending email:", error);
        alert("An error occurred. Please try again.");
    });
}
