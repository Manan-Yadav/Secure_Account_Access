const newpwd=document.querySelector("#newpwd");
const slashed_eye=document.querySelector(".new i")
const slash_eye=document.querySelector(".check i")
const eye=document.querySelector(".fa-eye");
const checkpwd=document.querySelector("#checkpwd")
const match=document.querySelector(".match")
const done=document.querySelector(".Donebtn")
const donelink=document.querySelector(".donebtnlink");

function valid_pwd(pwd){
    const upper=/[A-Z]/.test(pwd);
    const lower=/[a-z]/.test(pwd);
    const number=/[0-9]/.test(pwd);
    const specialchr=/[!@#$%^&*()*-?/<>]/.test(pwd);
    return upper &&  lower && number && specialchr
}

slashed_eye.addEventListener("click",()=>{
    slashed_eye.classList.toggle("fa-eye-slash")
    slashed_eye.classList.toggle("fa-eye")
    if(newpwd.type ==="password"){
        newpwd.type="text"
    }
    else if(newpwd.type==="text"){
        newpwd.type="password"
    }
})
slash_eye.addEventListener("click",()=>{
    slash_eye.classList.toggle("fa-eye-slash")
    slash_eye.classList.toggle("fa-eye")
    if(checkpwd.type ==="password"){
        checkpwd.type="text"
    }
    else if(checkpwd.type==="text"){
        checkpwd.type="password"
    }
})
done.addEventListener("click",()=>{
if(newpwd.value==""){
    match.innerHTML="Please enter a valid pasword"
    match.style.display="flex"
    newpwd.style.border="2px solid red"
    checkpwd.style.border="2px solid red"
    slashed_eye.classList.toggle("fa-circle-xmark")
    slashed_eye.classList.toggle("fa-eye-slash")
    slash_eye.classList.toggle("fa-circle-xmark")
    slash_eye.classList.toggle("fa-eye-slash")
}
else if(!valid_pwd(newpwd.value)){
    match.innerHTML="Password must contains at least one uppercase letter,one lowercase letter,one number and one special character";
    match.style.display="flex"
    newpwd.style.border="2px solid red"
    checkpwd.style.border="2px solid red"
    slashed_eye.classList.toggle("fa-circle-xmark")
    slashed_eye.classList.toggle("fa-eye-slash") 
    slash_eye.classList.toggle("fa-circle-xmark")
    slash_eye.classList.toggle("fa-eye-slash")
}
else if(newpwd.value!=checkpwd.value){
    match.innerHTML="Password do not match"
    match.style.display="flex"
    newpwd.style.border="2px solid red"
    checkpwd.style.border="2px solid red"
    slashed_eye.classList.toggle("fa-circle-xmark")
    slashed_eye.classList.toggle("fa-eye-slash")
    slash_eye.classList.toggle("fa-circle-xmark")
    slash_eye.classList.toggle("fa-eye-slash")
}
else{
    alert("Password changed successfully ");
    let newpwdvalue=newpwd.value
    localStorage.setItem('oldpwd',newpwdvalue);
    donelink.setAttribute("href",".Login.html")
}
})
newpwd.addEventListener("click",()=>{
        match.style.display="none"
        newpwd.style.border="2px solid greenyellow"
        checkpwd.style.border="2px solid greenyellow"
        slashed_eye.classList.remove("fa-circle-xmark")
        slashed_eye.classList.add("fa-eye-slash")
        slash_eye.classList.remove("fa-circle-xmark")
        slash_eye.classList.add("fa-eye-slash")
})
checkpwd.addEventListener("click",()=>{
        match.style.display="none"
        newpwd.style.border="2px solid greenyellow"
        checkpwd.style.border="2px solid greenyellow"
        slashed_eye.classList.remove("fa-circle-xmark")
        slashed_eye.classList.add("fa-eye-slash")
        slash_eye.classList.remove("fa-circle-xmark")
        slash_eye.classList.add("fa-eye-slash")
})

