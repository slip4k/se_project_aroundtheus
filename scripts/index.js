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

function openModal() {
  profileEditModal.classList.add("modal_opened");
}

function closeModal() {
  profileEditModal.classList.remove("modal_opened");
}

profileEditClose.addEventListener("click", closeModal);
profileEditButton.addEventListener("click", openModal);
