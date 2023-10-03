import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="plist">
      <div className="pListItem" onClick={(e)=> {
        let link = e.target.closest(".pListItem").querySelector(".pListTitles h3").innerText;
        window.location.assign(`/hotels/${link.toLowerCase()}`)
      }}>
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
          alt="hotel"
          className="pListImg"
        />
        <div className="pListTitles">
          <h3>Hotels</h3>
          <h4>917,203 hotels</h4>
        </div>
      </div>
      <div className="pListItem"
      onClick={(e)=> {
        let link = e.target.closest(".pListItem").querySelector(".pListTitles h3").innerText;
        window.location.assign(`/hotels/${link.toLowerCase()}`)
      }}
      >
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
          alt="apartments"
          className="pListImg"
        />
        <div className="pListTitles">
          <h3>Apartments</h3>
          <h4>869,743 apartments</h4>
        </div>
      </div>
      <div className="pListItem"
      onClick={(e)=> {
        let link = e.target.closest(".pListItem").querySelector(".pListTitles h3").innerText;
        window.location.assign(`/hotels/${link.toLowerCase()}`)
      }}
      >
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
          alt="resorts"
          className="pListImg"
        />
        <div className="pListTitles">
        <h3>Resorts</h3>
        <h4>18,112 resorts</h4>
        </div>
      </div>
      <div className="pListItem"
      onClick={(e)=> {
        let link = e.target.closest(".pListItem").querySelector(".pListTitles h3").innerText;
        window.location.assign(`/hotels/${link.toLowerCase()}`)
      }}
      >
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
          alt="villas"
          className="pListImg"
        />
        <div className="pListTitles">
          <h3>Villas</h3>
          <h4>467,358 villas</h4>
        </div>
      </div>
      <div className="pListItem"
      onClick={(e)=> {
        let link = e.target.closest(".pListItem").querySelector(".pListTitles h3").innerText;
        window.location.assign(`/hotels/${link.toLowerCase()}`)
      }}
      >
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
          alt="cabins"
          className="pListImg"
        />
        <div className="pListTitles">
          <h3>Cabins</h3>
          <h4>135,428 cabins</h4>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
