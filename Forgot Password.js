function sendOTP(){
    const email=document.querySelector("#email");
    const otp=document.querySelector(".otp");
    const serviceId="service_i0i5rlm";
    const templateId="template_4yg0zaw";
    let OTP_val=Math.floor(Math.random()*10000);
    let emailbody=`<h2>Your OTP is </h2>${OTP_val}`;
    emailjs.send(serviceId,templateId,params)
      .then(
      message => {
        if(message=="OK"){
            alert("OTP sent to your email " + email.value);
            const OTPinp=document.querySelector("#OTPinp");
            const OTPcheck=document.querySelector("#OTPcheck")
            const cross=document.querySelector(".fa-circle-xmark")
            const OTPbtn=document.querySelector(".OTPbtn")
            otp.style.display="flex"
             OTPcheck.addEventListener("click",()=>{
                if(OTPinp.value==OTP_val){
                    alert("Email address verified")
                }
                else{
                    alert("Invalid OTP")
                    OTPinp.style.border="2px solid red";
                    cross.style.display="flex";
                    OTPbtn.style.left="-5px";
                }
            })
        }
      }
    );
}
const btn=document.querySelector(".btn")
const continuebtn=document.querySelector(".continuebtn")
const cross=document.querySelector(".fa-circle-xmark")
const OTPbtn=document.querySelector(".OTPbtn")
btn.addEventListener("click",()=>{
    continuebtn.style.display="flex"
})
OTPinp.addEventListener("click",()=>{
    OTPinp.style.border="2px solid black";
    cross.style.display="none"
    OTPbtn.style.left="10px";
}
)
