function sendOTP() {
    const email = document.querySelector("#email");
    const otp = document.querySelector(".otp");

    if (!email.value || !email.value.includes("@")) {
        alert("Enter a valid email address.");
        return;
    }

    let OTP_val = Math.floor(1000 + Math.random() * 9000);
    let emailbody = `<h2>Your OTP is </h2>${OTP_val}`;

    console.log("Sending OTP to:", email.value); // Debugging

    Email.send({
        SecureToken: "e94c2c73-2fba-4949-9820-a81253313ed3", // Replace with new token if needed
        To: email.value,
        From: "shyam73245@gmail.com",
        Subject: "OTP for Password reset",
        Body: emailbody,
    }).then(
        message => {
            console.log("Email Response:", message); // Debugging
            if (message === "OK") {
                alert("OTP sent to " + email.value);
                otp.style.display = "flex";

                document.querySelector("#OTPcheck").addEventListener("click", () => {
                    const OTPinp = document.querySelector("#OTPinp");
                    const cross = docum
