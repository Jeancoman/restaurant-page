function createHeader() {
    const container = document.querySelector("#content");
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const nav = document.createElement("nav");
    const tabs = document.createElement("ul");
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li");
    const headerContainer = document.createElement("div");
  
    //* Text inside
  
    h1.innerHTML = "Mario Brothers";
    home.innerHTML = "Home";
    home.setAttribute("class", "home")
    menu.innerHTML = "Menu";
    menu.setAttribute("class", "menu");
    contact.innerHTML = "Contact";
    contact.setAttribute("class", "contact");
  
    //* Text inside
  
    //* Append elements to the DOM
  
    headerContainer.setAttribute("id", "header");
    header.appendChild(h1);
    headerContainer.appendChild(header);
    header.insertAdjacentElement("afterend", nav);
    nav.appendChild(tabs);
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);
    container.appendChild(headerContainer);
  }
  
  export { createHeader };
  