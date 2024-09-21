window.onload = (event) =>{
    const img = document.getElementById("bee-icon");
    var imgNum = Math.floor(Math.random() * 4);
    img.src = "images/0" + imgNum.toString() + ".png";   
    
    // load posts
    loadData();

    // const header = document.getElementById("post")
    
    // const post = postdata.posts;
    // for(const post of posts) {
    //     const postTitle = document.createElement("h2");
        
    //     postTitle.textContent = post.Title;
    //     header.append(postTitle)
    // }
};

async function loadData(){
    const response = await fetch('data.json');
    const json = await response.json();

    const cardsContainer = document.querySelector(".content .posts");
    CreateCardsAndAppend(cardsContainer, json);

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            if (card.classList.contains("selected")) {
                card.classList.remove("selected");
            }
            else {
                cards.forEach((c) => {
                if (c.classList.contains("selected")) {
                    c.classList.remove("selected");
                }
                });
                card.classList.toggle("selected");
                let selectedID = card.id;
                for (let i = 0; i < json.posts.length; ++i) {
                    if (json.posts[i].id != selectedID)
                        continue;
                    const activePost = document.querySelector(".active-post .text");
                    activePost.innerHTML = "";
                    const title = document.createElement("h1");
                    title.textContent = json.posts[i].title;
                    const detailsText = document.createElement("div");
                    detailsText.textContent = json.posts[i].details;
                    const requirements = document.createElement("ul");
                    for (let j = 0; j < json.posts[i].requirements.length; ++j) {
                        const requirement = document.createElement("li");
                        requirement.textContent = json.posts[i].requirements[j];
                        requirements.appendChild(requirement);
                    }
                    activePost.append(title, detailsText, requirements);
                }
            }
        });
    });
}

function CreateCardsAndAppend(cardsContainer, json) {
    for (let i = 0; i < json.posts.length; ++i) {
        const card = document.createElement("section");
        card.id = json.posts[i].id;
        card.classList.add("card");
        const container = document.createElement("div");
        container.classList.toggle("container");
        const title = document.createElement("h2");
        title.textContent = json.posts[i].title;
        const responsibilities = document.createElement("ul");
        for (let j = 0; j < json.posts[i].responsibilities.length; ++j) {
            const r = document.createElement("li");
            r.textContent = json.posts[i].responsibilities[j];
            responsibilities.appendChild(r);
        }
        const date = document.createElement("span");
        date.textContent = "01/01/01";
        container.appendChild(title);
        container.appendChild(responsibilities);
        card.appendChild(container);
        card.appendChild(date);
        cardsContainer.appendChild(card);
    }
}

// view live update for inputs into post creation
function updateInput(i, output) {
    document.getElementById(output).innerText = i.value;
} 

function post() {
    const role = document.getElementById("role-output").innerText
    const project = document.getElementById("project-output").innerText
    const body = document.getElementById("body-output").innerText
    const due = document.getElementById("date-output").innerText

    console.log("this would post a post with the title: " + role)
    console.log("Alongside the project name: " + project)
    console.log("And with some information about the role: " + body)
    
    const postpopup = window.open

    const post = "this would post a post with the title: " + role + "\nAlongside the project name: " + project + "\nAnd with some information about the role: " + body + "\nDue by: " + due;
    alert(post)
}