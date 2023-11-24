import useFetch from "../../hooks/useFetch";
import "./featured.css";

import img1 from  "../../assets/mumbai_img.jpg";
import img2 from  "../../assets/pun_image.jpg";
import img3 from  "../../assets/vapi_image.jpg";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Mumbai,Pune,Vapi"
  );

  return (
    <div
      className="featured"
      onClick={(e) => {
        let url = e.target
          .closest(".featuredItem")
          .querySelector("h2")
          .innerText.replace(" ", "-");
        window.location.assign(`/hotels/${url}`);
      }}
    >
      {loading ? (
        "Loading Please Wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src={img1}
              alt="img"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>Mumbai</h2>
              <h3>{data[0]} Properties</h3>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={img2}
              alt="img"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>Pune</h2>
              <h3>{data[1]} Properties</h3>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={img3}
              alt="img"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>Vapi</h2>
              <h3>{data[2]} Properties</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
