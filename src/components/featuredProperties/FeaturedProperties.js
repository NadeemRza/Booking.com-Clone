import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fpList">
      <div className="fpListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/123801934.webp?k=27073a18101dd5a4eefc76251f7d476be72e19ed03e98819f2d94667dd60f31a&o=&s=1"
          alt="fpimg"
          className="fpListImg"
        />
        <span className="fpListName">
          6 Continents Apartments by Prague Residences
        </span>
        <span className="fpListCity">Prague 1, Czech Republic, Prague</span>
        <span className="fpListPrice">Strating from Rs.12,413</span>
        <div className="fpListRating">
          <button>8.4</button>
          <span>Very Good · </span>
          <span> 250 reviews</span>
        </div>
      </div>
      <div className="fpListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=bc461f3aff9a66c15ddae3b3a7e10a44f6aea550cb89ce292cec7ca0b4ccecdb&o=&s=1"
          alt="fpimg"
          className="fpListImg"
        />
        <span className="fpListName">
            Villa Domina
        </span>
        <span className="fpListCity">Split City Center, Croatia, Split</span>
        <span className="fpListPrice">Strating from Rs.3,401</span>
        <div className="fpListRating">
          <button>9.4</button>
          <span>Wonderful · </span>
          <span> 1003 reviews</span>
        </div>
      </div>
      <div className="fpListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
          alt="fpimg"
          className="fpListImg"
        />
        <span className="fpListName">
            7Seasons Apartments Budapest
        </span>
        <span className="fpListCity">06. Terézváros, Hungary, Budapest</span>
        <span className="fpListPrice">Strating from Rs.10,772</span>
        <div className="fpListRating">
          <button>8.8</button>
          <span>Excellent · </span>
          <span> 6,952 reviews</span>
        </div>
      </div>
      <div className="fpListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt="fpimg"
          className="fpListImg"
        />
        <span className="fpListName">
            Aparthotel Stare Miasto
        </span>
        <span className="fpListCity">Old Town, Poland, Kraków</span>
        <span className="fpListPrice">Strating from Rs.9,279</span>
        <div className="fpListRating">
          <button>8.7</button>
          <span>Excellent · </span>
          <span> 2,293 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
