let b=document.getElementById("text");
let a=document.getElementById("butt");
a.addEventListener("click",function(){
    let c=document.getElementById("parent");
    let x=document.createElement("div");
    x.innerHTML=` <div class="container1">
    <p>${b.value}</p>
    <button onclick="f(this)" id="remove">Remove</button>
    <button onclick ="edit(this)" id="edit">Edit</button>
   </div>`;
    // x.className="container1";
    c.appendChild(x);
    // console.log("ok")
})

function f(e){
    // let a=e.previousSibling;
    // a.remove();
    // e.remove();
    // e.remove();
    e.parentElement.remove();
    
}
function edit(e){
let a=e.parentElement.firstElementChild;
let b=e.parentElement;
let c=a.textContent;
b.removeChild(a);
let input=document.createElement("input");
input.className="editbox";
input.type="text";
input.value=c;
b.prepend(input);
// e.textContent="save";
let butt=document.createElement("button");
butt.id="save";
butt.textContent="save";
b.append(butt);
butt.setAttribute("onclick","save(this)");
}
function save(e){
let a=e.parentElement;
let x=e.parentElement.firstElementChild.value;
a.removeChild(e.parentElement.firstElementChild)
let b=document.createElement("p");
b.textContent=x;
a.prepend(b);
e.remove();
}
function text1(e){
    e.style.border="red solid 2px";
    console.log("hey");
}
