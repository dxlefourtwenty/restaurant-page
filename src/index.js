import "./styles.css";
import PageModule from "./PageModule.js";
import Menu from "./menu.js";

console.log("Webpack success!");

const navs = document.querySelectorAll(".nav");
const aboutPage = document.getElementById("about-page");
const menuPage = document.getElementById("menu-page");
const contactPage = document.getElementById("contact-page");

// Add to menu
Menu.addCard(
    "Classic Smashburger",
    "Two 80% lean patties smashed down crispy-thin with two slices of american cheese and caramelized onions. Served with two potato buns topped off with mayo and ketchup."
);

Menu.addCard(
    "Skinnylicious Burger",
    "One 95% patty cooked to perfection with a slice of white american cheese, tomato, lettuce, and onions cooked to order. Served on two potato buns."
);

Menu.addCard(
    "Cheesy Tuna Melt",
    "2/3lbs of melt-in-your-mouth goodness served with extra cheese whiz on toasted sourdough."
);

Menu.addCard(
    "French Onion Dip Roast",
    "Smoked roast beef with sweet caramelized onions on italian bread. Served with a side of Au Jus for dipping."
);

Menu.displayMenu();

navs.forEach((nav, index) => {
    nav.addEventListener('click', () => {
        navs.forEach(nav => nav.classList.remove('active-nav'));
        nav.classList.add('active-nav');

        switch (index) {
            case 0:
                PageModule.showPage(aboutPage);
                PageModule.hidePage(menuPage);
                PageModule.hidePage(contactPage);
                break;
            case 1:
                PageModule.showPage(menuPage);
                PageModule.hidePage(aboutPage);
                PageModule.hidePage(contactPage);
                break;
            case 2:
                PageModule.showPage(contactPage);
                PageModule.hidePage(aboutPage);
                PageModule.hidePage(menuPage);
                break;
        }
    });
});

