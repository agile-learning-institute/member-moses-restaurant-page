import { createEle } from "./index.js";

export default function goToHome() {

    const content = document.querySelector("#content");
    content.innerHTML = "";

    const welcomeCont = createEle('div', 'welcome-cont');

    const welcomeNote = createEle('div', 'welcome-note');

    const heading = createEle('h1', 'heading');
    heading.innerHTML = "Welcome to Pachu-Wa Restaurant";

    const intro = createEle('p', 'intro');
    intro.innerHTML = "Kany Ka Rwate, katoko, Kadonngo kacel";

    const image = document.createElement("img");
    image.setAttribute('id', 'home-img');
    image.setAttribute('alt', 'Restaurant');
    image.setAttribute('src', './images/image-01.jpg');

    welcomeNote.appendChild(heading);
    welcomeNote.appendChild(intro);

    welcomeCont.appendChild(welcomeNote);
    welcomeCont.appendChild(image);


    content.appendChild(welcomeCont);
};