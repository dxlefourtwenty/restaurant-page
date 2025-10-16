import "./styles.css";
import PageModule from "./PageModule.js";

console.log("Webpack success!");

const navs = document.querySelectorAll(".nav");
const aboutPage = document.getElementById("about-page");
const menuPage = document.getElementById("menu-page");
const contactPage = document.getElementById("contact-page");

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

