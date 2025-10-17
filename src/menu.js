const Menu = (() => {
    const menuContent = document.getElementById("menu-content");
    const menuCards = [];
    document.querySelectorAll("#menu-content .menu-card").forEach(card => {
        menuCards.push(card);
    });


    function addCard(title, desc) {
        const card = document.createElement("div");
        const cardTitle = document.createElement("div");
        const cardDesc = document.createElement("div");

        card.classList.add("menu-card");
        cardTitle.classList.add("card-title");
        cardDesc.classList.add("card-desc");

        cardTitle.textContent = title;
        cardDesc.textContent = desc;

        card.appendChild(cardTitle);
        card.appendChild(cardDesc);

        menuCards.push(card);
    }

    function displayMenu() {
        menuCards.forEach(card => {
            menuContent.appendChild(card);
        });
    }

    return {
        addCard,
        displayMenu
    }

})();

export default Menu;