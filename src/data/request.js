import { clearUserData, getUserData } from "../util.js";
//TODO да се провери дали хоста е същия
const host = `http://localhost:3030`;

async function requester(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers[`Content-Type`] = `application/json`;
    options.body = JSON.stringify(data);
  }

  const userData = getUserData();
  if (userData) {
    options.headers[`X-Authorization`] = userData.accessToken;
  }

  try {
    const response = await fetch(host + url, options);

    if (!response.ok) {
      if (response.status == 403) {
        clearUserData();
      }

      const err = await response.json();
      throw new Error(err.message);
    }
    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (err) {
    // TODO ако на изпита не е алърт да се смени с каквото трябва да е
    alert(err.message);
    throw err;
  }
}
export const get = (url) => requester("GET", url);
export const post = (url, data) => requester("POST", url, data);
export const put = (url, data) => requester("PUT", url, data);
export const del = (url) => requester("DELETE", url);
