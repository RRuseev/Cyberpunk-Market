
import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { get, del } from "../data/request.js";
import { getUserData } from "../util.js";
import page from "../../node_modules/page/page.mjs";
import { updatenav } from "./updateNav.js";

const root = document.querySelector("main");

const temp = (data, result, onDelete) => html`
<section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src=${data.imageUrl} alt="example1" />
              <p id="details-title">${data.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">Price: €${data.price} </p>
                <p class="details-availability">
                ${data.availability} 
                </p>
                <p class="type">Type: ${data.type} </p>
                <p id="item-description">
                ${data.description} 
                </p>
              </div>
              ${result ? html` <div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a href="" @click = ${onDelete}id="delete-btn">Delete</a>
              </div>
            </div>
          </div>`: null}
              <!--Edit and Delete are only for creator-->
             
        </section>
 `;

export async function details(ctx) {
    const id = ctx.params.id
    const data = await get(`/data/cyberpunk/${id}`);
    console.log(data);

    const user = await getUserData();
    const hasUser = !!user;
    const isOwner = hasUser && user._id == data._ownerId
    const result = hasUser && isOwner
    console.log(result);
    updatenav()
    render(temp(data, result, onDelete), root)

    async function onDelete(e) {
        e.preventDefault()
        const dialog = confirm("Are you sure")
        if (dialog) {
            await del(`/data/cyberpunk/${id}`)

            page.redirect("/dashboard")
        }

    }
}