import { createEle } from "./index.js";

export default function goToContact() {

    const content = document.querySelector("#content");
    content.innerHTML = "";

    const welcomeCont = createEle('div', 'welcome-cont');

    const welcomeNote = createEle('div', 'welcome-note');

    const heading = createEle('h1', 'heading');
    heading.innerHTML = "Contact Us";

    const intro = createEle('p', 'intro');
    intro.innerHTML = "Find Us in Gulu City, the Home of the Elephants";

    const image = document.createElement("img");
    image.setAttribute('id', 'home-img');
    image.setAttribute('alt', 'Gulu City Arial View');
    image.setAttribute('src', './images/Gulu-Town.jpg');

    welcomeNote.appendChild(heading);
    welcomeNote.appendChild(intro);

    welcomeCont.appendChild(welcomeNote);
    welcomeCont.appendChild(image);

    content.appendChild(welcomeCont);
}