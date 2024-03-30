import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { register } from "../data/user.js";
import page from "../../node_modules/page/page.mjs";
import { updatenav } from "./updateNav.js";
import { showErrorNotification } from "./err.js";
const root = document.querySelector("main");

// Дефинирайте onsubmit функцията преди да я използвате в temp шаблона
async function onsubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    const rePass = formData.get("re-password").trim()

    if (!email || !password) {

        return showErrorNotification("fill in all the fields")
    }
    if (password !== rePass) {

        return showErrorNotification("Passwords don't match!")
    }
    await register(email, password);
    updatenav()
    page.redirect("/")
}

const temp = (onsubmit) => html`
        <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit = ${onsubmit} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`;

export async function showRegister() {
    updatenav()
    render(temp(onsubmit), root)
}




