import { html, render } from "../../node_modules/lit-html/lit-html.js";

const temp = () => html` <section>
  <p>SAmple content</p>
  
</section>`;

export function showExam(ctx){
    render(temp())
}