const main = document.getElementsByClassName("main")[0];
const uploadBtn = main.getElementsByClassName('btn')[0];
const links = document.querySelectorAll(".link");

const btns = document.getElementsByClassName("btn")
console.log(btns)

links.forEach((link) => {
    link.addEventListener("click", (e) => {
    toggleNavList(e)
})})

const popupHandler = () => {
    const popup = document.getElementsByClassName("filter")[0];
    if(popup.classList[popup.classList.length - 1] === "hide"){
        popup.classList.remove("hide");
        popup.classList.add("flex")
    }else{
        popup.classList.remove("flex");
        popup.classList.add("hide")
    }
}


const toggleNavList = (e) => {
    links.forEach((link) => {
        if (link.classList[link.classList.length - 1] === "selected") {
            link.classList.remove("selected")
        }
    })
    e.target.classList.add("selected")
}

document.getElementsByClassName("nav")[0].addEventListener("click", (e) => {
    document.getElementsByClassName("main")[0].style.left = "250px"
})