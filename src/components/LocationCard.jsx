import "./styles/LocationCard.css";

const LocationCard = ({ location }) => {
  return (
    <article className="item">
      <h2 className="text-item">{location?.name}</h2>
        <ul className="container-item">
          <li className="lit">
            <span> <strong>Type:</strong></span>
            <span>{location?.type}</span>
          </li>
          <li className="lit">
            <span><strong>Dimension:</strong></span>
            <span>{location?.dimension}</span>
          </li>
          <li className="lit">
            <span><strong>Population:</strong></span>
            <span>{location?.residents.length}</span>
          </li>
        </ul>
    </article>
  );
};

export default LocationCard;
