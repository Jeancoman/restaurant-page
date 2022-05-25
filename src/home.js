function createHome() {
    const container = document.querySelector("#content");
    const div = document.createElement("div");

    div.setAttribute("id", "hero-text");
    div.innerHTML = "From family, to families";

    container.appendChild(div);
}

function deleteHome() {
    const div = document.querySelector("#hero-text");
    div.remove();
}

export { createHome, deleteHome }