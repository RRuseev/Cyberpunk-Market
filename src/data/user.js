import { post, get } from "./request.js";
import { clearUserData, setUserData } from "../util.js";
//TODO ако трябва нещо друго освен имейл и парола трябва да се допише
//TODO да се видят endPoints дали са същите
const endPoints = {
    login: `/users/login`,
    register: `/users/register`,
    logout: `/users/logout`
}
export async function login(email, password) {
    const result = await post(endPoints.login, { email, password });
    setUserData(result)
}
export async function register(email, password) {
    const result = await post(endPoints.register, { email, password });
    setUserData(result)
}
export async function logout() {
    const promisse = get(endPoints.logout)
    clearUserData()
    await promisse
}