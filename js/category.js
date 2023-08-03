let producTypeContainer = document.querySelectorAll(".product-type-container h3")
let closeIcon = document.querySelector("i.close")

producTypeContainer.forEach(ele => {
    ele.addEventListener("click", () => {
        for (let i = 0; i < ele.clientHeight; i++) {
            ele[i].classList.remove("underline")
        }
        ele.classList.add("underline")
    })
})

let addNew = document.querySelector(".addNew")
let formContainer = document.querySelector(".addNew-form-container")
let discard = document.querySelector(".discard")
const header = document.querySelector("header")
const allContainer = document.querySelector(".all-count-container")

addNew.addEventListener("click",addNewProduct)
discard.addEventListener("click", discardFuntion)
closeIcon.addEventListener("click",discardFuntion)


function addNewProduct() {
    formContainer.style.visibility = "visible";
        // header.style.opacity = "0.2"
        // allContainer.style.opacity = "0.2"
}
function discardFuntion() {
    formContainer.style.visibility = "hidden";
}   