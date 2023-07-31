const eyeIcon = document.querySelector("#eye")
const email = document.querySelector(".emailinput")
const passwoed = document.querySelector(".passwordInput")
const loginForm = document.querySelector(".login")
const errMail = document.querySelector(".errmail")
const errPass = document.querySelector(".errpass")
const LoginBtn = document.querySelector(".LoginBtn")


eyeIcon.addEventListener("click",()=>{
    if(passwoed.type == "password"){
        passwoed.type = "text"
        eyeIcon.className = "fa-solid fa-eye"
    }
    else{
        passwoed.type = "password"
        eyeIcon.className = "fa-solid fa-eye-slash"
    }
})


loginForm.addEventListener("submit",(e)=>{
    // e.preventDefault()

    const emailVal = email.value.trim()
    const passwordval = passwoed.value.trim()


let arr = [];
        // console.log(arr);
        //email
        if(emailVal === ""){
            seterror(errMail,"email is requied")
        }


        else{
            setSuccess(errMail,"vaild email")
            arr.push(emailVal)
        }
        //password
        if(passwordval === ""){
            seterror(errPass,"password is requird")
        }else if(passwordval.charAt(0).match("@","_","-","#")){
            seterror(passwoed,"No caps in first")
        }
        else if(passwordval.length < 8){
            seterror(errPass,"password atleast 8 char")
        }
        // else if(passwordval.charAt(0) !== passwordval.charAt(0).toUpperCase()){
        //     seterror(errPass,"password first letter uppercase")
        // }
        else if(!passwordval.match("@","_","-","#")){
            seterror(errPass,"use minimum one special char")
        }else if(!passwordval.match(1,2,3,4,5,6,7,8,9,0)){
            seterror(errPass,"passwor should have one number")
        }
        else{
            setSuccess(errPass,"password success")            
            arr.push(passwordval)
        }

        function setSuccess(element,message){
            let aaa = element
            aaa.innerText = message
            aaa.style.visibility = "hidden"
            errPass.width = "219px"
        }

        function seterror(element,message){
            let aaa = element
            aaa.innerText = message
            aaa.style.visibility = "visible"
            aaa.style.color = "#A54242"
            email.style.borderBottom = "2px solid #A54242"
            passwoed.style.borderBottom = "2px solid #A54242"
            errMail.style.width= "190px"
        }

    // $.ajax({
    //     url: '/loginLogic',
    //     method: 'POST',
    //     data:{"email":emailVal,
    //         "password":passwordval
    //     },
    //     success: function (response) {
    //         // console.log(response);
       
    //     }
    // })
  
        // const validEmail = (email) =>{
        //     return email.toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        // }

})

