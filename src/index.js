import goToHome from "./home";
import goToMenu from "./menu";
import goToContact from "./contact";
import './styles.css';

goToHome();

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    goToHome();
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    goToMenu();
});

const contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", () => {
    goToContact();
});

export function createEle(elementType, classValue) {
    const element = document.createElement(elementType);
    element.classList.add(classValue);
    return element;
};