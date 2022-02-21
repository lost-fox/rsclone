/* eslint-disable prefer-const */
import { Button, Rate } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetUserDataResponse } from "../../../../api/getUserData.api";
import { useHttp } from "../../../../hooks/http.hooks";
import { AppState } from "../../../../store";
import { getUserData } from "../../../../store/users/actions";
import "./style.css";

const HotelCard = (props: any) => {
  const dispatch = useDispatch();
  const { request } = useHttp();
  const user = useSelector<AppState, GetUserDataResponse | null>(
    (state) => state.usersData.user
  );

  let [favorite, setFavorite] = useState(false);

  const favoriteHandler = async () => {
    try {
      const hotelId = props.data.hotel_id.toString();
      await request(
        `https://rsclone-server.herokuapp.com/user/${user?._id}/favorite`,
        "PATCH",
        { hotelId }
      );
      dispatch(getUserData());
    } catch (error) {
      console.log(error);
    }
  };

  user?.favoriteHotels?.map((hotel) => {
    if (hotel == props.data.hotel_id) favorite = true;
  });

  return (
    <div className="hotel-card">
      <div
        className="hotel-card-img"
        style={{ backgroundImage: `url(${props.data.max_photo_url})` }}
      >
        <div
          className={`${
            favorite ? " favorite-icon favorite" : "favorite-icon"
          }`}
          onClick={() => {
            setFavorite(!favorite);
            favoriteHandler();
          }}
        ></div>
      </div>
      <span className="hotel-name">
        <b>{props.data.hotel_name_trans}</b>
      </span>
      <span className="hotel-description">{props.data.address_trans}</span>
      <div className="hotel-card-info">
        <span>{props.data.distance_to_cc}км до центра</span>
        <span>
          <b>от {props.data.min_total_price}₽</b>
        </span>
      </div>
      <hr className="card-info-line" />
      <div className="hotel-card-info">
        <Rate
          className="rate-icon"
          allowHalf
          defaultValue={+props.data.review_score / 2}
        />
        <span>{props.data.review_score_word}</span>
      </div>
      <Link to="/hotel">
        <Button className="more-hotel-btn">Подробнее</Button>
      </Link>
    </div>
  );
};

export default HotelCard;
