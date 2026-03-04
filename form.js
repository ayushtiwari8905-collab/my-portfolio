
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
 
if(mobile.value.length!==10||first.value===""||last.value===""||
 email.value===""){

    alert("fill full form");

    if(mobile.value.length!==10){
    error.innerText="please enter a valid number";
    mobile.style.boxShadow="0 0 5px red";
    }
    else{
    error.innerText="";
    mobile.style.boxShadow="0 0 5px rgba(0,0,0,0.3)";
    }

    if(first.value===""){
    first.style.boxShadow="0 0 5px red";
    }
    else{
    first.style.boxShadow="0 0 5px rgba(0,0,0,0.3)";
    }

    if(last.value===""){
    last.style.boxShadow="0 0 5px red";
    }
    else{
    last.style.boxShadow="0 0 5px rgba(0,0,0,0.3)";
    }

    if(mail.value===""){
    email.style.boxshadow="0 0 5px red";    
    }
    else{
    email.style.boxShadow="0 0 5px rgba(0,0,0,0.3)";
    }

}
 

else{
    
    if(submit.value==="submitted"){
        alert("you are already submitted");
    }
    else{
        alert("submited successfully");
    }  

    submit.value="submitted";
    submit.style.backgroundColor="green";
    submit.style.boxShadow="0 0 5px green";
    }
});