import "./hotelPage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const HotelPage = () => {

  const [slideNo, setSlideNo] = useState(0);

  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/404715743.jpg?k=dc92686d109bc7d7b645d51cfa6a0c159fb2e7bab9fbff32d2d48ff70b56cb17&o=&hp=1%22",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/404715718.jpg?k=3494da349d0b8e8c4fbcfce42e18c856d567ec857390ff0773631adfe5a314dc&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/404715710.jpg?k=cc67bcfc48e18dcf55204e95a241f772ee66f914900599d9577eddbe21f30b3e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/404715705.jpg?k=9f976071e7039defa71ec28bc41b0e788a024b3f6a81dea0dd8aefe73f02622c&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/404715706.jpg?k=05a13766fec3e1f22bc5d858969a52141b1440f22abdcb99746601f67f53a097&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/404715773.jpg?k=4506497af92cfef68e3195530b5dd3b1f40960fadbff9533c3e8573d932a2159&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNo(i);
    setOpen(true)
  };

  const handleMove = (dir) => {
    let newSlideNo;

    if(dir === 'l') {
      newSlideNo = slideNo === 0 ? 5 : slideNo-1;
    } else {
      newSlideNo = slideNo === 5 ? 0 : slideNo+1;
    }

    setSlideNo(newSlideNo);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l')} />
          <div className="sliderWrapper">
            <img src={photos[slideNo].src} alt="simg" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('r')} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon color="#165dbf" icon={faLocationDot} />
            <span>
              Domino's Calangute nayaka vaddo, 403516 Calangute, India
            </span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from Airport
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rs. 10,000 at this property and get a free airport
            taxi.
          </span>
          <div className="hotelImgs">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="img" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                FabExpress Caring has been welcoming Booking.com guests since
                Oct 18, 2022
              </h1>
              <p className="hotelDesc">
                <p>You're eligible for a Genius discount at FabExpress Caring
                Holiday Inn, Calangute! To save at this property, all you have
                to do is sign in.</p>

                <p>FabExpress Caring Holiday Inn, Calangute is
                located in Calangute, a 13-minute walk from Calangute Beach and
                1.4 km from Candolim Beach. This 3-star hotel offers a 24-hour
                front desk and room service. The hotel has family rooms.</p>
                
                <p>At the hotel, the rooms include air conditioning and a flat-screen TV.
                Guests at FabExpress Caring Holiday Inn, Calangute can enjoy a à
                la carte breakfast.</p>

                <p>Baga Beach is 2.6 km from the accommodation,
                while Chapora Fort is 9.3 km from the property. The nearest
                airport is Dabolim Airport, 40.2 km from FabExpress Caring
                Holiday Inn, Calangute.</p>

                <p>This is our guests' favorite part of
                Calangute, according to independent reviews.<br />
                FabExpress Caring Holiday Inn, Calangute has been welcoming Booking.com guests
                since Oct 18, 2022</p>
                
                <p>FabHotels Distance in
                property description is calculated using © OpenStreetMap</p>
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>Loacted in the real heart of Goa, this property has an excellent location score of 9.8!</span>
              <h2>
                <b>Rs. 29,120</b> (5 nights)
                </h2>
                <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default HotelPage;
