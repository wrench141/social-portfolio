const banners = document.querySelectorAll(".banner");
const bars = document.getElementsByClassName("bars")[0];
const cards = document.querySelectorAll(".card");
const cimgs = document.querySelectorAll(".cimg");

//scroll bars
const width = (100/banners.length) + "%";
for(i=0; i<banners.length; i++){
    const bar = document.createElement("div");
    const cbar = document.createElement("div");
    cbar.classList.add("cbar");
    cbar.classList.add("hide");
    bar.classList.add("bar");
    bar.appendChild(cbar);
    bar.style.setProperty("--width", width);
    bars.appendChild(bar);
}


//banner auto scroll
const cbars = document.querySelectorAll(".cbar");
let j=1;
cbars[0].classList.remove("hide");
setInterval(() => {
    if(cbars[j] != undefined && cbars.length > 1){
        cbars.forEach((cbar) => {
            cbar.classList.add("hide");
        })
        if (j - 1 < 0) cbars[0].classList.remove("hide")
        else cbars[j].classList.remove("hide");
        document.getElementsByClassName("imgs")[0].style.transform = `translateX(-${j*100 +0.2}%)`
    }
    j++;
    if(j==banners.length){
        setTimeout(() => j = 0, [2000])
    };
}, [2000])



setTimeout(() => {
    cimgs.forEach((img, i) => {
        const width = img.width + "px";
        console.log(width)
        cards[i].style.setProperty("--width", width)
    })
}, 200);

const categories = document.querySelectorAll(".cat");
categories.forEach((category) => {
    category.addEventListener("click", (e) => {
            categories.forEach((cat) => {
                if (cat.classList[cat.classList.length - 1] === "sel") {
                    cat.classList.remove("sel")
                }
            })
            e.target.classList.add("sel")
    })
})
