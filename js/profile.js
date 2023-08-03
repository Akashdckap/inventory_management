const profileEditButton = document.querySelector(".profileEditButton")
const SecnamePTag = document.querySelectorAll(".Secname")
const asignDiv = document.querySelectorAll(".change")
const cancelButton = document.querySelector(".profileCancelButton")
const profileSaveButton = document.querySelector(".profileSaveButton")



for (let i = 0; i < SecnamePTag.length; i++) {
    profileEditButton.addEventListener("click",()=>{
                cancelButton.classList.add("calcelBtnShow")
                let changeInput = `<input class="changeInputPro" type="text" value="${SecnamePTag[i].innerText}">`
                asignDiv[i].innerHTML = changeInput
                profileEditButton.classList.add("remove")
                profileSaveButton.classList.add("savebtnShow")
    })

    // profileSaveButton.addEventListener("click",()=>{
    //     let changeInputPro = document.querySelectorAll(".changeInputPro")
    //     let inVal = changeInputPro[i].value
    //     let savedValAssign = `<p class="Secname">${inVal}</p>`
    //     // console.log(savedValAssign);
    //     // console.log(asignDiv[i]);
    //     console.log(inVal);
    //     // asignDiv[i].innerHTML = savedValAssign
    // })
    cancelButton.addEventListener("click",()=>{
        cancelButton.classList.remove("calcelBtnShow")
        profileSaveButton.classList.remove("savebtnShow")
        profileEditButton.classList.remove("remove")
        let rePtag = `<p class="Secname">${SecnamePTag[i].innerText}</p>`
        asignDiv[i].innerHTML = rePtag
    })
}


