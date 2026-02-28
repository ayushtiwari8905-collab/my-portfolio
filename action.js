
    
let body=document.querySelector("body");
let menu=document.querySelector("#menu");
let div, head, p;


menu.addEventListener("click",()=>{  
    if(div){
        div.remove();
        div=null;
     } 
    else{
    div=document.createElement("div");
    div.classList.toggle("div");   
    div.innerHTML=`
    <h3>HOME 🏚️</h3>
    <ul>
<li><h5><a href="about.html" class="" >
    about</a>
</h5></li>

<li><h5><a href="contact.html" class="" >
    contect</a>
</h5></li>

<li><h5><a href="resume.pdf" class="" >resume</a>
</h4></li>


<li><h5><a href="contactform.html" class="" >feedback</a>
</h4></li> 

<li><h5><a href="index.html" class="" >exit</a>
</h5></li>
    </ul>
    
    `;
    body.append(div);
    
    
    }
});




