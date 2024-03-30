import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { get } from "../data/request.js";
import { updatenav } from "./updateNav.js";

const root = document.querySelector("main");


const temp = (carsData) => html`
    
    <h3 class="heading">Market</h3>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          
          ${carsData.length ? carsData.map(cards) : html`<h3 class="empty">No Items Yet</h3>`}
        </section>
        <!-- Display an h2 if there are no posts -->
        
        
`


const cards = (data) => html`
    
    <div class="item">
            <img src=${data.imageUrl} alt="example1" />
            <h3 class="model">${data.item}</h3>
            <div class="item-info">
              <p class="price">Price: €${data.price}</p>
              <p class="availability">
              ${data.availability}
              </p>
              <p class="type">Type: ${data.type}</p>
            </div>
            <a class="details-btn" href="/details/${data._id}">Uncover More</a>
          </div>
            `



export async function showDashboard() {
    const data = await get("/data/cyberpunk?sortBy=_createdOn%20desc");
    console.log(data);
    updatenav()
    render(temp(data), root)
}