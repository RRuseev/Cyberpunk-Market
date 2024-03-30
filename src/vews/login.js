import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { login } from "../data/user.js";
import { updatenav } from "./updateNav.js";
import { showErrorNotification } from "./err.js";

const root = document.querySelector("main");


const temp = (onLogin) => html`  <section id="login">
<div class="form">
  <h2>Login</h2>
  <form @submit = ${onLogin}class="login-form">
    <input type="text" name="email" id="email" placeholder="email" />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="password"
    />
    <button type="submit">login</button>
    <p class="message">
      Not registered? <a href="/register">Create an account</a>
    </p>
  </form>
</div>
</section>`;


export function showLogin() {

    render(temp(onLogin), root);


}

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    if (!email || !password) {
        return  showErrorNotification("fill in all the fields")
    }
    await login(email, password);
    updatenav()
    page.redirect("/");
}