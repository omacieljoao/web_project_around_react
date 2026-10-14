import Popup from "../../../../Main/components/Popup/Popup";

export default function ImagePopup(props) {
  const { card, onClose } = props;
  return (
    <Popup onClose={onClose}>
      <img className="popup__image" src={card.link} />
      <p className="popup__caption">{card.name}</p>
    </Popup>
  );
}
