
const imgInput = document.querySelector('#inputTag')
const imgEl = document.querySelector('.image')
imgInput.addEventListener('change', () => {
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imgEl.src = e.target.result;
            imgEl.style.height = "100px"
            imgEl.style.width = "100px";
        }
        reader.readAsDataURL(imgInput.files[0]);
    }
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