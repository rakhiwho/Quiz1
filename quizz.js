// document.querySelector('body').innerHTML="hello";

let ham = document.querySelector(".ham");

let ul = document.querySelector(".hello");
ul.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        ul.querySelectorAll("a").forEach((link) => {
            link.classList.remove("clicked");
        });
        event.target.classList.add("clicked");
    }
});

ham.addEventListener("click", () => {
    ul.classList.toggle("ul");
    console.log("hello");

});


const home = document.querySelector(".home");
const more = document.querySelector(".more");
const section = document.querySelector(".sec");
more.addEventListener('click', ()=>{
})

