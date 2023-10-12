import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

import resortImg from "../../assets/resort_image.jpg";
import cabinImg from "../../assets/cabin_image.jpg";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
    resortImg,
    "https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    cabinImg,
  ];

  return (
    <div className="plist">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data &&
            images.map((image, index) => (
              <div
                key={index}
                className="pListItem"
                onClick={(e) => {
                  let link = e.target
                    .closest(".pListItem")
                    .querySelector(".pListTitles h3").innerText;
                  window.location.assign(`/hotels/${link.toLowerCase()}`);
                }}
              >
                <img src={image} alt="hotel" className="pListImg" />
                <div className="pListTitles">
                  <h3>{data[index]?.type}</h3>
                  <h4>{data[index]?.count} {data[index]?.type}s</h4>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
