import { Link } from 'react-router-dom';
import './searchItem.css';

const SearchItem = (props) => {

  const { key, item } = props;
  const modes = ["Airport", "Railway Station", "Bus Stop"];

  const image = "https://cf.bstatic.com/xdata/images/hotel/square600/404715718.webp?k=01028f84b870508a586fb94144d266d2dfeb91b36ba48e1f826ffbb03d9b1e4a&o=&s=1";

  return (
    <div className='searchItem' key={key}>
      <img src={item?.photos[0] || image} alt={'hotelImg'} className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item?.name}</h1>
        <span className="siDistance">{item?.distance}m from {modes[Math.floor(Math.random() * modes.length)]}</span>
        <span className="siTaxiOp">Free taxi</span>
        <span className="siSubtitle">
            Studio Apartment with Air Conditioning
        </span>
        <span className="siFeatures">
            Entire studio · 1 bathroom · 21m² 1full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>{item?.rating === 0
                      ? "Excellent  ·"
                      : item?.rating === 5
                      ? "Excellent  ·"
                      : item?.rating < 3
                      ? "Good ·"
                      : "Very Good ·"}</span>
            <button>{item?.rating || 5}</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">
                Rs. {item?.cheapestPrice}
            </span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${item._id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchItem;
