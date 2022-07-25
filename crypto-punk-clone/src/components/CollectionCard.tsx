import "./CollectionCard.css";
import weth from "../assets/eth.png";
interface Traits {
  value: number;
}
interface Props {
  id: number;
  name: string;
  traits: Traits[];
  image: string;
}

const CollectionCard = ({ id, name, traits, image }: Props) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="image" />
      <div className="details"></div>
      <div className="name">
        {name}
        <div className="id">.#{id}</div>
      </div>
      <div className="priceContainer">
        <img src={weth} alt="weth" className="wethImage" />
        <div className="price">{traits[0]?.value}</div>
      </div>
    </div>
  );
};

export default CollectionCard;
