
let users = [];
let usersTag = document.getElementById("users-box")
let count = 0

function renderUsers(user){     
    
    let div = document.createElement("div")
    usersTag.appendChild(div)
    div.classList.add("user")
    let name = document.createElement("p")
    let email = document.createElement("p")
    div.appendChild(name)
    div.appendChild(email)
    count = count + 1
    name.innerText = count + ". " + user.name
    email.innerText = user.email
    
}

function Addusers(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    if (!name.value || !email.value) {
        alert("Please enter both fields.")
    }
    else{
        let user = {
            name: name.value,
            email: email.value,
        }
        users.push(user)
        console.log(users)
        renderUsers(user)
    }
    
}


function Removeusers() {
    console.log("Removing users");
    if (usersTag.hasChildNodes()) {
        usersTag.removeChild(usersTag.children[users.length - 1])
        users.pop()
    }

}
