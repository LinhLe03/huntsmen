window.onload = (event) =>{
    const img = document.getElementById("bee-icon");

    var imgNum = Math.floor(Math.random() * 4);

    img.src = "images/0" + imgNum.toString() + ".png";      
};