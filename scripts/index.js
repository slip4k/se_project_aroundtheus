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

const cardsContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card").content;

const profileEditModal = document.querySelector("#edit");
const profileForm = profileEditModal.querySelector("#edit-form");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditClose = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const titleInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");

const closeAddPictureButton = document.querySelector("#add-close");
const createButton = document.querySelector("#create-btn");
const saveButton = document.querySelector("#save-btn");
const addWindow = document.querySelector("#add");
const addButton = document.querySelector(".profile__add-button");
const profileAddForm = document.querySelector("#add-form");

const titleInputField = document.querySelector("#title");
const linkInputField = document.querySelector("#link");

const previewPopup = document.querySelector("#preview");
const closePreviewPopupButton = previewPopup.querySelector("#preview-close");

function fillProfileForm() {
  titleInput.setAttribute("value", profileTitle.textContent);
  descriptionInput.setAttribute("value", profileDescription.textContent);
}

function openPopup(popup) {
  popup.classList.add("modal_opened");
}

function closePopup(popup) {
  popup.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", () => {
  fillProfileForm();
  openPopup(profileEditModal);
});
profileEditClose.addEventListener("click", () => closePopup(profileEditModal));

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = titleInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popup);
}
profileForm.addEventListener("submit", handleProfileFormSubmit);

addButton.addEventListener("click", () => openPopup(addWindow));
closeAddPictureButton.addEventListener("click", () => closePopup(addWindow));

function handlePreviewClick(data) {
  const previewLink = data.link;
  const previewAlt = data.name;
  const previewCaption = data.name;
  const modalPreviewImage = previewPopup.querySelector(".modal__preview-image");
  const modalPreviewPictureCaption =
    previewPopup.querySelector(".modal__caption");
  modalPreviewImage.setAttribute("src", previewLink);
  modalPreviewAlt.setAttribute("alt", previewAlt);
  modalPreviewPictureCaption.textContent = data.name;
  openPopup(previewPopup);
}

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

  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  const handleLikeIcon = (evt) => {
    evt.target.classList.toggle("card__like-active");
  };
  likeButton.addEventListener("click", handleLikeIcon);

  function deleteCard(evt) {
    evt.target.closest(".card").remove();
  }
  deleteButton.addEventListener("click", deleteCard);

  cardImage.addEventListener("click", () => handlePreviewClick(data));

  return cardElement;
}

closePreviewPopupButton.addEventListener("click", () =>
  closePopup(previewPopup)
);

initialCards.forEach(function (card) {
  cardsContainer.append(getCardElement(card));
});

function addCard(evt) {
  evt.preventDefault();

  const createdCard = {
    name: titleInputField.value,
    link: linkInputField.value,
  };
  cardsContainer.prepend(getCardElement(createdCard));
  closePopup(addWindow);
  profileAddForm.reset();
}

profileAddForm.addEventListener("submit", addCard);
