const card1 = {
  name: "Yosemite Valley",
  link: "./images/yosemite-valley.png",
};
const card2 = {
  name: "Lake Louise",
  link: "./images/lake-louise.png",
};
const card3 = {
  name: "Bald Mountains",
  link: "./images/bald-mountains.png",
};
const card4 = {
  name: "Latemar",
  link: "./images/latemar.png",
};
const card5 = {
  name: "Vanoise National Park",
  link: "./images/vanoise-national-park.png",
};
const card6 = {
  name: "Lago Di Braies",
  link: "./images/lago-di-braies.png",
};
const initialCards = [card1, card2, card3, card4, card5, card6];

const profileEditModal = document.querySelector("#edit");
const profileForm = profileEditModal.querySelector(".modal__form");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditClose = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const titleInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");

function openModal() {
  profileEditModal.classList.add("modal_opened");
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function closeModal() {
  profileEditModal.classList.remove("modal_opened");
}

profileEditClose.addEventListener("click", closeModal);
profileEditButton.addEventListener("click", openModal);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = titleInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal();
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

const cardsContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card").content;

function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardName = data.name;
  const cardText = cardElement.querySelector(".card__title");

  const cardLink = data.link;
  const altText = data.name;

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.setAttribute("src", cardLink);
  cardImage.setAttribute("alt", altText);

  cardText.textContent = cardName;
  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  cardsContainer.append(getCardElement(initialCards[i]));
}
