export default function EditAvatar() {
  return (
    <form className="popup__form" id="edit-image-form" noValidate>
      <input
        required
        minLength="2"
        className="popup__input popup__input_type_edit-image"
        name="edit-image"
        placeholder="Foto"
        type="url"
      />
      <span className="edit-image-type-error popup-type-error">
        Preencha esse campo.
      </span>
      <button disabled className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
