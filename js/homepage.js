

let allContainers = document.querySelectorAll(".sideNav-icon")
for (let i = 0; i < allContainers.length; i++) {
    allContainers[i].addEventListener("click", (e) => {
        // e.preventDefault();
        for (let i = 0; i < allContainers.length; i++) {
            allContainers[i].classList.remove('active')
            // allContainers[i].nextElementSibling.classList.remove("active");
        }
        console.log(allContainers[i].classList.add("active"));
        // console.log(allContainers[i].nextElementSibling.classList.add("active"));
    })
}

// console.log("ds");









// let allContainers = document.querySelectorAll(".left-nav-bar")

// for (let i = 0; i < allContainers.length; i++) {
//     allContainers[i].addEventListener("click", (e) => {
//         e.preventDefault();

//         for (let i = 0; i < allContainers.length; i++) {
//             allContainers[i].classList.remove('show')
//         }
//         allContainers[i].classList.add('show');
//         // console.log(allContainers[i].children);
//     })
// }