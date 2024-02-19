
const addData = ()=>{
const names = document.getElementById("projectname").value;
const hostedlink = document.getElementById("hostedlink").value;
const sourcelink = document.getElementById("sourcelink").value;
const box1 = document.getElementById("box1");

 console.log(names);
 console.log(hostedlink);
 console.log(sourcelink);
 if(names && hostedlink && sourcelink){

     box1.innerHTML += `<div class="header1 subheader">
     <h2>${names}</h2>
     </div>
     <div class="subheader">
     <div class="div1"><a href="${sourcelink}" target="_blank">Source Code</a></div>
     <div class="div1"><a href=" ${hostedlink}" target="_blank">Hosted Link</a></div>
     </div>`
    }else{
        alert("Data is empty")
    }
}