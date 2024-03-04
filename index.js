const overlay=document.getElementById("overlay")
const closeModel=document.getElementById("close-model")

window.onload = function() {
    setTimeout(() => {
        overlay.style.display="block"  
    },1000 );  };


closeModel.addEventListener("click",()=>{
    overlay.style.display="none"
})




const searchInput=document.getElementById("searchInput")
searchInput.addEventListener("keyup",(e)=>{
    let searchQuery=e.target.value.toLowerCase()
    const menu=document.getElementsByClassName("menuItem")
    let menucontent=document.getElementsByClassName("shop-section")


    for(let counter=0;counter<menu.length;counter++){
        let menuItem=menu[counter].textContent.toLowerCase()
        if(menuItem.includes(searchQuery)){
            menu[counter].style.display="block"
            menucontent[counter].style.display="block"
            menucontent[counter].style.display="flex"


        }else{
            menu[counter].style.display="none"
            menucontent[counter].style.display="none"

        }
    }

})



const slides = document.getElementsByClassName("crousel-item")
let slidposition = 0
const totalslides = slides.length

function hidallslides(){
    for(let slide of slides){
        slide.classList.remove('crousel-item-visible')
        // slide.classList.add('crousel-item-hidden')

    }
}
document.getElementById("crousel-button-next").addEventListener("click", movetonextslide)
function movetonextslide() {
    hidallslides()
    if (slidposition === totalslides - 1) {
        slidposition = 0
    } else {
        slidposition++;
    } slides[slidposition].classList.add("crousel-item-visible")
}
document.getElementById("crousel-button-pre").addEventListener("click", movetoprevslide)
function movetoprevslide() {
    hidallslides()
    if(slidposition!=0){
        slidposition--;
    }else{
        slidposition=totalslides-1
    }slides[slidposition].classList.add("crousel-item-visible")
}













const tabs=document.querySelectorAll(`[data-tab-target]`)
const tabContents=document.querySelectorAll(`[data-tab-content]`)


tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        const target=document.querySelector(tab.dataset.tabTarget)
        console.log(target)
        tabContents.forEach(tabcontent=>{
            tabcontent.classList.remove("active")
        })

        tabs.forEach(tab=>{
            tab.classList.remove("active")
        })
        tab.classList.add("active")
        target.classList.add("active")

    })
})



// review section 
let blogspace=document.getElementById("blogspace")
let newpost=document.getElementById("newpost")
let postarr=[]

function renderpost(){
    let html=""
    for(let post of postarr){
        html += `

        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <hr>
        `
    }
    blogspace.innerHTML=html
}
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res=>res.json())
.then(data=>{
    postarr=data.slice(0,5)
renderpost()    
})

newpost.addEventListener("submit",function(e){
    e.preventDefault()
    const posttitle=document.getElementById("title").value
    const postbody=document.getElementById("body").value
    const data={
        title:posttitle,
        body:postbody
    }
    let options={
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }
fetch("https://apis.scrimba.com/jsonplaceholder/posts",options)
.then(res=>res.json())
.then(data=>
    postarr.unshift(data),
    console.log(postarr),
    renderpost(),
// newpost.reset()
posttitle.value=" ",
postbody.value=" "
    )
})





// search bar 

let allDOMcollectionName=document.getElementsByClassName("name")
document.getElementById("searchInput").addEventListener("keyup",function(event){
    let searchQuery=event.target.value.toLowerCase();
    for(let count=0;count<allDOMcollectionName.length;count++){
        let currentname=allDOMcollectionName[count].textContent.toLowerCase()
        if(currentname.includes(searchQuery)){
            allDOMcollectionName[count].style.display="block"
        }else{
            allDOMcollectionName[count].style.display="none"
        }
    }
})



let input=document.getElementById("searchInput")

window.addEventListener("DOMContentLoaded", function() {
    for (let count = 0; count < allDOMcollectionName.length; count++) {
        allDOMcollectionName[count].style.display = "none";
    }
});

function myFunction1() {
    console.log("something hapen");
    for (let count = 0; count < allDOMcollectionName.length; count++) {
        allDOMcollectionName[count].style.display = "block";
    }
}
function myFunction() {
    console.log("something hapen");
    for (let count = 0; count < allDOMcollectionName.length; count++) {
        allDOMcollectionName[count].style.display = "none";
    }
}




