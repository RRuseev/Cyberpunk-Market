import { getUserData } from "../util.js";

export async function updatenav() {
    const userElement = document.querySelector('.user');
    const guestElement = document.querySelector('.guest');
    userElement.style.display = "none"
    const setUser = await getUserData()
    if (setUser) {
        userElement.style.display = "block"
        guestElement.style.display = "none"
    } else {
        userElement.style.display = "none"
        guestElement.style.display = "block"
    }
}
