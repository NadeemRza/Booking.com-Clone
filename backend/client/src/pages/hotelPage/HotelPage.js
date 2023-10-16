import "./hotelPage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const HotelPage = () => {
  let image =
    "https://cf.bstatic.com/xdata/images/hotel/max500/404715743.jpg?k=dc92686d109bc7d7b645d51cfa6a0c159fb2e7bab9fbff32d2d48ff70b56cb17&o=&hp=1%22";

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [slideNo, setSlideNo] = useState(0);

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const { dates, options } = useContext(SearchContext);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);

  const handleOpen = (i) => {
    setSlideNo(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNo;

    if (direction === "l") {
      newSlideNo = slideNo === 0 ? 5 : slideNo - 1;
    } else {
      newSlideNo = slideNo === 5 ? 0 : slideNo + 1;
    }

    setSlideNo(newSlideNo);
  };

  const handleReservation = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading
        ? "Loading Data, Please Wait..."
        : data && (
            <div className="hotelContainer">
              {open && (
                <div className="slider">
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="close"
                    onClick={() => setOpen(false)}
                  />
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className="arrow"
                    onClick={() => handleMove("l")}
                  />
                  <div className="sliderWrapper">
                    <img
                      src={data?.photos[slideNo]}
                      alt="simg"
                      className="sliderImg"
                    />
                  </div>
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="arrow"
                    onClick={() => handleMove("r")}
                  />
                </div>
              )}
              <div className="hotelWrapper">
                <button onClick={handleReservation} className="bookNow">Reserve or Book Now!</button>
                <h1 className="hotelTitle">{data?.name}</h1>
                <div className="hotelAddress">
                  <FontAwesomeIcon color="#165dbf" icon={faLocationDot} />
                  <span>
                    {data?.address} {data?.city}, India
                  </span>
                </div>
                <span className="hotelDistance">
                  Excellent location - {data?.distance}m from Airport
                </span>
                <span className="hotelPriceHighlight">
                  Book a stay over Rs. {data?.cheapestPrice} at this property
                  and get a free airport taxi.
                </span>
                <div className="hotelImgs">
                  <div className="hotelImgWrapper">
                    {data && data.photos && data.photos.length === 0 ? (
                      <img src={image} alt="img" className="hotelImg" />
                    ) : (
                      data?.photos?.map((photo, i) => (
                        <img
                          onClick={() => handleOpen(i)}
                          src={photo}
                          alt="img"
                          className="hotelImg"
                        />
                      ))
                    )}
                  </div>
                </div>
                <div className="hotelDetails">
                  <div className="hotelDetailsTexts">
                    <h1 className="hotelTitle">
                      FabExpress Caring has been welcoming Booking.com guests
                      since Oct 18, 2022
                    </h1>
                    <div className="hotelDesc">
                      <p>{data?.description}</p>

                      <p>
                        FabExpress Caring Holiday Inn, Calangute is located in
                        Calangute, a 13-minute walk from Calangute Beach and 1.4
                        km from Candolim Beach. This 3-star hotel offers a
                        24-hour front desk and room service. The hotel has
                        family rooms.
                      </p>

                      <p>
                        At the hotel, the rooms include air conditioning and a
                        flat-screen TV. Guests at FabExpress Caring Holiday Inn,
                        Calangute can enjoy a à la carte breakfast.
                      </p>

                      <p>
                        Baga Beach is 2.6 km from the accommodation, while
                        Chapora Fort is 9.3 km from the property. The nearest
                        airport is Dabolim Airport, 40.2 km from FabExpress
                        Caring Holiday Inn, Calangute.
                      </p>

                      <p>
                        This is our guests' favorite part of Calangute,
                        according to independent reviews.
                        <br />
                        FabExpress Caring Holiday Inn, Calangute has been
                        welcoming Booking.com guests since Oct 18, 2022
                      </p>

                      <p>
                        FabHotels Distance in property description is calculated
                        using © OpenStreetMap
                      </p>
                    </div>
                  </div>
                  <div className="hotelDetailsPrice">
                    <h1>Perfect for a {days}-night stay!</h1>
                    <span>
                      Loacted in the real heart of {data?.city}, this property
                      has an
                      {data?.rating > 3 ? "excellent" : ""} location score of{" "}
                      {data?.rating}!
                    </span>
                    <h2>
                      <b>Rs. {data?.cheapestPrice * days * options.room}</b> (
                      {days} nights)
                    </h2>
                    <button onClick={handleReservation}>
                      Reserve or Book Now!
                    </button>
                  </div>
                </div>
              </div>
              <MailList />
              <Footer />
            </div>
          )}
      {openModal && <Reserve setOpen={setOpenModal} hoteId={id} />}
    </div>
  );
};

export default HotelPage;
