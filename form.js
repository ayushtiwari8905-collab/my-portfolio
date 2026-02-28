alert("hi");
let form=document.querySelector("form");
let mobile= document.querySelector("#mobile");
let first=document.querySelector("#first");
let last=document.querySelector("#last");
let email=document.querySelector("#email");
let option=document.querySelector(".option");
let submit=document.querySelector("#submit");

form.addEventListener("submit",()=>{
 event.preventDefault();   
 let error=document.querySelector("small");
 
if(mobile.value.length!==10){
error.innerText="please enter a valid number";
mobile.style.boxShadow="0 0 5px red";
}
 
else if(first.value===""||last.value===""||
 email.value===""||option.value===""){
    alert("fill full form");
    if(first.value===""){
     first.style.boxShadow="0 0 5px red";
    }
    else if(last.value===""){
     last.style.boxShadow="0 0 5px red";
    }
    }

else{
    
    if(submit.value==="submitted"){
        alert("you are already submitted");
    }
    else{
        alert("submited successfully");
    }
    error.innerText="";
    mobile.style.boxShadow=
    "0 0 5px rgba(0,0,0,0.3)";
    
    first.style.boxShadow=
    "0 0 5px rgba(0,0,0,0.3)";
    
    last.style.boxShadow=
    "0 0 5px rgba(0,0,0,0.3)";
    
    submit.value="submitted";
    submit.style.backgroundColor="green";
    submit.style.boxShadow="0 0 5px green";
}
});