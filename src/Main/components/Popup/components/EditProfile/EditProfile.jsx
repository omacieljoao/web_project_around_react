export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form" noValidate>
      <input
        required
        minLength="2"
        maxLength="40"
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nome"
        type="text"
      />
      <span className="name-type-error popup-type-error">
        Preencha esse acmpo.
      </span>
      <input
        required
        minLength="2"
        maxLength="200"
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Sobre mim"
        type="text"
      />
      <span className="description-type-error popup-type-error">
        Preencha esse campo.
      </span>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
