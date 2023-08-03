const editBtn = document.querySelectorAll("#editSymbol")
const deleteBtn = document.querySelectorAll("#deleteSymbol")
const editHov = document.querySelectorAll(".edHov")
const deletelHov = document.querySelectorAll(".delHov")
const Addinvitebtn = document.querySelector(".Addinvitebtn")
const appenduser = document.querySelector(".userinviteForm")
const navList = document.querySelector(".nav-list")



for (let e = 0; e < editBtn.length; e++) {
    editBtn[e].addEventListener("mouseover",(e)=>{
        let show = e.target.nextElementSibling
        show.style.visibility = "visible"
    })

    editBtn[e].addEventListener("mouseout",(e)=>{
        let show = e.target.nextElementSibling
        show.style.visibility = "hidden"
    })

}

for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("mouseover",(e)=>{
        let shows = e.target.nextElementSibling
        shows.style.visibility = "visible"
    })

    deleteBtn[i].addEventListener("mouseout",(e)=>{
        let shows = e.target.nextElementSibling
        shows.style.visibility = "hidden"
    })

}

const inviteuserCon = document.querySelector("header")
const inviteUseropa = document.querySelector(".inviteUseropa")

Addinvitebtn.addEventListener("click",()=>{
    inviteuserCon.style.opacity = "0.2"
    inviteUseropa.style.opacity = "0.2"
    navList.style.opacity = "0.2"
    let form = `<div class="assent">
    <div class="headinginviteusers">Invite User</div>
    <div class="line1"></div>
    <div class="formSection">
    <form action="" method="">
    <div class="nameDiv">
    <div class="divinputLableName">
    <lable>Name</lable>
    </div>
    <div>
    <input type="text" placeholder="Enter your full name">
    </div>
    </div>
    <div class="emailDiv">
    <div class="divinputLableEmail">    
    <lable>Email</lable>
    </div>
    <div>    
    <input type="email" placeholder="Enter your email">
    </div>
    </div>
    <div class="roleDiv">
    <div class="divinputLableRole">    
    <lable>Role</lable>
    </div>
    <div>
    <select class="inviteRole">
    <option>Admin</option>
    <option>User</option>
    </select>
    </div>
    </div>
    <div class="inviteuserBtns">
    <button type="submit" class="inviteUserSendBtn">Send Invite</button>
    </div>
    </form>
    <div class="inviteuserbackBtns">
    <button class="inviteuserbackBtn" onclick="remove()">Discard</button>
    </div>
    </div>
    </div>`

    appenduser.innerHTML = form
})

// window.addEventListener("click", ()=>{
//     // remove()
// })


function remove(){
    inviteuserCon.style.opacity = "1"
    inviteUseropa.style.opacity = "1"
    navList.style.opacity = "1"
    appenduser.innerHTML = ""
}