window.onload = (event) =>{
    const img = document.getElementById("bee-icon");
    var imgNum = Math.floor(Math.random() * 4);
    img.src = "images/0" + imgNum.toString() + ".png";   
};

// view live update for inputs into post creation
function updateInput(i, output) {
    document.getElementById(output).innerText = i.value;
} 

function post() {
    const role = document.getElementById("role-output").innerText
    const project = document.getElementById("project-output").innerText
    const body = document.getElementById("body-output").innerText
    const due = document.getElementById(    )

    console.log("this would post a post with the title: " + role)
    console.log("Alongside the project name: " + project)
    console.log("And with some information about the role: " + body)
    
    const postpopup = window.open

    const post = "this would post a post with the title: " + role + "\nAlongside the project name: " + project + "\nAnd with some information about the role: " + body;
    alert(post)
}