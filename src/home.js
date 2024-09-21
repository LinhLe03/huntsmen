const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener('click', () => {
        if (card.classList.contains("selected")) {
            card.classList.remove("selected");
        }
        else {
            cards.forEach((c) => {
            if (c.classList.contains("selected")) {
                c.classList.remove("selected")
            }
            });
            card.classList.toggle("selected");
        }
    });
});