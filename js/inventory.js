let producTypeContainer = document.querySelectorAll(".product-type-container h3")

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

addNew.addEventListener("click",addNewProduct)
discard.addEventListener("click", discardFuntion)

function addNewProduct() {
    formContainer.style.visibility = "visible";
}
function discardFuntion() {
    formContainer.style.visibility = "hidden";
}   