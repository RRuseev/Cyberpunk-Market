import page from "../node_modules/page/page.mjs";
import { logout } from "./data/user.js";
import { addCar } from "./vews/create.js";
import { showDashboard } from "./vews/dashboard.js";
import { details } from "./vews/details.js";
import { editEvents } from "./vews/edit.js";
import { showErrorNotification } from "./vews/err.js";
import { showHome } from "./vews/home.js";
import { showLogin } from "./vews/login.js";
import { showRegister } from "./vews/register.js";
import { updatenav } from "./vews/updateNav.js";
updatenav()

export async function showLogout() {
    await logout()
    updatenav()

    page.redirect("/")
}

page("/", showHome);
page("/register", showRegister);
page("/login", showLogin);
page("/dashboard", showDashboard);
page("/details/:id", details);
page("/logout", showLogout);
page("/create", addCar);
page("/edit/:id", editEvents);

page.start() 