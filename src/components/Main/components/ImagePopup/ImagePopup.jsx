import Popup from "../../../../Main/components/Popup/Popup";

export default function ImagePopup(props) {
  const { card, onClose } = props;
  return (
    <>
      <img className="popup__image" src={card.link} alt={card.name} />
      <p className="popup__caption">{card.name}</p>
    </>
  );
}
