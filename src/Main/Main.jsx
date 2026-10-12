import { useState } from "react";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Popup from "./components/Popup/Popup";

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfiflePopup = {
    title: "Edit profile",
    children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <main className="content">
        <section className="profile page__section">
          <img
            className="profile__image"
            src="./images/avatar.jpg"
            alt="Avatar"
          />
          <img
            className="profile__image-edit"
            src="./images/edit-icon.svg"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />

          <div className="profile__info">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={() => handleOpenPopup(editProfiflePopup)}
            ></button>
            <p className="profile__description">Explorador</p>
          </div>
          <button
            aria-label="Adicionar cartão"
            className="profile__add-button"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list"></ul>
          <template id="card-template">
            <li className="card">
              <img className="card__image" />
              <button
                aria-label="Excluir cartão"
                className="card__delete-button"
                type="button"
              ></button>
              <div className="card__description">
                <h2 className="card__title"></h2>
                <button
                  aria-label="Botão de curtir"
                  className="card__like-button"
                  type="button"
                ></button>
              </div>
            </li>
          </template>
        </section>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}

export default Main;
