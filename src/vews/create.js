import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { post } from "../data/request.js";
import page from "../../node_modules/page/page.mjs";
import { updatenav } from "./updateNav.js";
import { showErrorNotification } from "./err.js";
const root = document.querySelector("main");

const addEvent = () => html`
 <section id="create">
          <div class="form form-item">
            <h2>Share Your item</h2>
            <form @submit = ${onsubmit} class="create-form">
              <input type="text" name="item" id="item" placeholder="Item" />
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;


export function addCar() {
    updatenav()
    render(addEvent(), root)
}
async function onsubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const item = formData.get("item")
    const imageUrl = formData.get("imageUrl")
    const price = formData.get("price")
    const availability = formData.get("availability")
    const type = formData.get("type")
    const description = formData.get("description")

    if (!item || !imageUrl || !price || !availability || !type || !description) {
        
        return  showErrorNotification("fill in all the fields")
    }

    const res = await post("/data/cyberpunk", { item, imageUrl, price, availability, type, description })

    page.redirect("/dashboard")
}