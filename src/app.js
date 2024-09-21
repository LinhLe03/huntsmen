window.onload = (event) =>{
    const img = document.getElementById("bee-icon");
    var imgNum = Math.floor(Math.random() * 4);
    img.src = "images/0" + imgNum.toString() + ".png";   
    
    // load posts
    loadJson()

    // const header = document.getElementById("post")
    
    // const post = postdata.posts;
    // for(const post of posts) {
    //     const postTitle = document.createElement("h2");
        
    //     postTitle.textContent = post.Title;
    //     header.append(postTitle)
    // }
};

async function loadJson(){
    const response = await fetch('data.json')
    const json = await response.json()

    console.log(json)
}   

