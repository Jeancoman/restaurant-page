function createMenu() {
    const container = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    const image = document.createElement("div");
    const text = document.createElement("div");

    menuContainer.setAttribute("id", "menu");
    image.setAttribute("class", "image");
    text.setAttribute("class", "text");
    text.innerHTML = "Mario's Pizza";

    menuContainer.appendChild(image);
    menuContainer.appendChild(text);
    container.appendChild(menuContainer);

}

function deleteMenu() {
    const menu = document.querySelector("#menu");
    menu.remove()
}

export { createMenu, deleteMenu }