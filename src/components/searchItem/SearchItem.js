import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/404715718.webp?k=01028f84b870508a586fb94144d266d2dfeb91b36ba48e1f826ffbb03d9b1e4a&o=&s=1" alt="img" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">FabExpress Caring Inn</h1>
        <span className="siDistance">500m from Airport</span>
        <span className="siTaxiOp">Free airport taxi</span>
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
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">
                Rs. 12,425
            </span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem;
