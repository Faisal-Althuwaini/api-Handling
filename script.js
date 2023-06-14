
function getPosts(userId) {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    request.responseType = "json"
    request.send()

    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {

            let posts = request.response

            document.getElementById("posts").innerHTML = ""


            for (post of posts) {
          let content = `
         <div id="posts " style="width: 90%; margin: 0 auto;">
            <div id="post">
                <h3>${post.title}</h3>
                <hr style="width: 70% ; margin-left : 0px;" >
                <h4>${post.body}</h4>
            </div>
        </div>
                `

        document.getElementById("posts").innerHTML += content



            }

        } else {
            alert("Error : " + request.status)
        }
    }


}


function getUsers() {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()

    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {

            let users = request.response

            document.getElementById("users").innerHTML = " "


            for (user of users) {
          let content = `
          <div id="user" class="" onClick="userClicked(${user.id} , this)">
            <h3>${user.name}</h3>
            <h3>${user.email }</h3>
        </div>
                `

        document.getElementById("users").innerHTML += content

            }

        } else {
            alert("Error : " + request.status)
        }
    }


}
getPosts(1)
getUsers()

function userClicked(userId , el) {

    getPosts(userId)
    
    let selectedElements =  document.getElementsByClassName("selected")
    for ( element of selectedElements ) {
        element.classList.remove("selected")
    }
    el.classList.add("selected")
}
