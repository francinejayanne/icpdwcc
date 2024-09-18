$(document).ready(function () {
    let errorMsg = "404";
    let container = document.querySelector(".error-container");

    for (let i = 0; i < errorMsg.length; i++) {
        let charKey = document.createElement("div");
        charKey.innerHTML = errorMsg.charAt(i);
        charKey.classList.add("key");
        container.appendChild(charKey);
    }
});