export default function RemoveCard() {
  return (
    <form
      className="popup__form"
      name="confirm-form"
      id="remove-card-form"
      noValidate
    >
      <button type="submit" className="button popup__button">
        Sim
      </button>
    </form>
  );
}
