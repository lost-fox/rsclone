import HotelName from "./hotel-name";
import InnerLeft from "./inner-left";
import InnerRight from "./inner-right";
import "./style.css";
import { useState, useEffect } from "react";

const ContentHotel = (props: any) => {
  const [name, setItems] = useState("");

  useEffect(() => {
    async function getNameHotel(obj: { hotel_name_trans: any }) {
      const nameHotel = obj.hotel_name_trans;
      setItems(nameHotel);
    }
    getNameHotel(props.data);
  });

  return (
    <div className="container">
      <HotelName name={name} />

      <div className="container-room">
        <InnerLeft
          score={props.data.review_score}
          scoreText={props.data.review_score_word}
        />
        <InnerRight />
      </div>
    </div>
  );
};

export default ContentHotel;
