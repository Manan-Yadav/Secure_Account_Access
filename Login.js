const pwd=document.querySelector("#password");
const slashed_eye=document.querySelector(".fa-eye-slash")
const wrong=document.querySelector(".wrong")
const login=document.querySelector("#btn")
// let oldpwdvalue="@Manan"
let oldpwd = localStorage.getItem('oldpwd');
// console.log(oldpwd)

slashed_eye.addEventListener("click",()=>{
    slashed_eye.classList.toggle("fa-eye-slash")
    slashed_eye.classList.toggle("fa-eye")
    if(pwd.type==="password"){
        pwd.type="text"
    }
    else if(pwd.type==="text"){
        pwd.type="password"
    }
})
login.addEventListener("click",()=>{
    if(pwd.value==""){
        wrong.textContent="Please enter a valid password"
        wrong.style.display="flex"
        pwd.style.border="2px solid red"; 
        slashed_eye.classList.toggle("fa-circle-xmark")
        slashed_eye.classList.toggle("fa-eye-slash")  
    }
    else if(pwd.value!=oldpwd){
       wrong.innerHTML=`Incorrect password . Please try again <br> or use "forgot Password" to reset it.`
       wrong.style.display="flex"
       pwd.style.border="2px solid red";
       slashed_eye.classList.toggle("fa-circle-xmark")
       slashed_eye.classList.toggle("fa-eye-slash")
    }
    else{
        alert("You have successfully logged in")
    }
})
pwd.addEventListener("click",()=>{
    wrong.style.display="none"
    pwd.style.border="2px solid black";
    slashed_eye.classList.remove("fa-circle-xmark")
    slashed_eye.classList.add("fa-eye-slash")
})

