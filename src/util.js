function setUserData(data) {
  localStorage.setItem(`user`, JSON.stringify(data));
}
function getUserData() {
  return JSON.parse(localStorage.getItem(`user`));
}

function clearUserData() {
  localStorage.removeItem(`user`);
}

export{
    setUserData,
    getUserData,
    clearUserData
}