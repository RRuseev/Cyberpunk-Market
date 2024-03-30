import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { updatenav } from "./updateNav.js";

const root = document.querySelector("main");

const tempHome = () => html` 
            <section id="hero">
          <img src="./images/home.png" alt="home" />
          <p>We know who you are, we will contact you</p>
        </section>
`;

export function showHome() {
    updatenav()
    render(tempHome(), root);
   
}