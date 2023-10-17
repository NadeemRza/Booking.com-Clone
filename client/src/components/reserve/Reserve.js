import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";

const Reserve = ({ setOpen, hoteId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hoteId}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = () => {
    const start = new Date(dates[0].startDate);
    start.setDate(start.getDate() + 1);
    const end = new Date(dates[0].endDate);
    end.setDate(end.getDate() + 1);
    const date = new Date(start.getTime());
    let dateList = [];
    while (date <= end) {
      dateList.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dateList;
  };

  const allDates = getDatesInRange();

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleRoomSelection = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleReserveClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      setOpen(false);
    } catch (err) {
      console.error(`${error.message}`);
    }
  };

  return (
    <div className="reserve">
      <div className="reserve_container">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="reserve_close"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data?.map((item) => (
          <div className="reserve_item" key={item._id}>
            <div className="reserve_item_info">
              <div className="reserve_title">{item.title}</div>
              <div className="reserve_description">{item.desc}</div>
              <div className="reserve_max">
                Max People:
                <b>{item.maxPeople}</b>
              </div>
              <div className="reserve_price">{item.price}</div>
            </div>
            <div className="reserveSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleRoomSelection}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleReserveClick} className="reserve_button">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Reserve;
