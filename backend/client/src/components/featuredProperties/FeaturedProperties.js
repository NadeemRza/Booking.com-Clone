import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  let images = [
    "https://cf.bstatic.com/xdata/images/hotel/square600/123801934.webp?k=27073a18101dd5a4eefc76251f7d476be72e19ed03e98819f2d94667dd60f31a&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=bc461f3aff9a66c15ddae3b3a7e10a44f6aea550cb89ce292cec7ca0b4ccecdb&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
  ];

  return (
    <div className="fpList">
      {loading ? (
        "Loading Data Please wait..."
      ) : (
        <>
          {data &&
            images.map((image, index) => (
              <div className="fpListItem" key={data[index]?._id}>
                <img
                  src={data[index]?.photos[0] || image}
                  alt={`fpimg${index}`}
                  className="fpListImg"
                />
                <span className="fpListName ml-02">{data[index]?.name}</span>
                <span className="fpListCity ml-02">
                  {data[index]?.address}, {data[index]?.city}
                </span>
                <span className="fpListPrice ml-02">
                  Strating from Rs.{data[index]?.cheapestPrice}
                </span>
                <div className="fpListRating ml-02">
                  <button>{data[index]?.rating || 5} &#9733;</button>
                  <span>
                    {data[index]?.rating === 0
                      ? "Excellent  ·"
                      : data[index]?.rating === 5
                      ? "Excellent  ·"
                      : data[index]?.rating < 3
                      ? "Good ·"
                      : "Very Good ·"}
                  </span>
                  <span>
                    {" "}
                    {Math.floor(Math.random() * (500 - 100 + 1) + 100)} reviews
                  </span>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
