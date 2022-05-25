function createContact() {
  const container = document.querySelector("#content");
  const contact = document.createElement("div");
  const iconOne = document.createElement("div");
  const iconTwo = document.createElement("div");
  const textOne = document.createElement("div");
  const textTwo = document.createElement("div");

  contact.setAttribute("id", "contact");
  iconOne.setAttribute("class", "icon-one");
  iconTwo.setAttribute("class", "icon-two");
  textOne.innerHTML = "123-456-789";
  textTwo.innerHTML = "email@email.com";

  container.appendChild(contact);
  contact.appendChild(iconOne);
  contact.appendChild(iconTwo);
  iconOne.insertAdjacentElement("afterend", textOne);
  iconTwo.insertAdjacentElement("afterend", textTwo);
}

function deleteContact() {
    const contact = document.querySelector("#contact");
    contact.remove();
}

export { createContact, deleteContact }