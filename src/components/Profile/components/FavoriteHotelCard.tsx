import { Spin } from "antd";
import { useEffect, useState } from "react";

export const FavoriteHotelCard = (props: any) => {
  const [data, setData] = useState();
  const id = props.data;
  useEffect(() => {
    const abortController = new AbortController();
    const fetchFavoriteHotelData = async () => {
      try {
        const response = await fetch(
          `https://booking-com.p.rapidapi.com/v1/hotels/data?locale=ru&hotel_id=${id}`,
          {
            method: "GET",
            signal: abortController.signal,
            headers: {
              "x-rapidapi-host": "booking-com.p.rapidapi.com",
              "x-rapidapi-key":
                "2189fd4ed5msh931f3fb548a96c3p1797d5jsn1bf4c8e6cd2c",
            },
          }
        );
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchFavoriteHotelData();
    return () => {
      abortController.abort();
    };
  }, [id]);

  const hotelInfo: any = data;

  if (hotelInfo === undefined)
    return (
      <div>
        <Spin size="large" />
      </div>
    );

  return (
    <div className="card">
      <div className="card__score">{hotelInfo.review_score}</div>
      <div
        className="card__img"
        style={{
          backgroundImage: `url(https://cdn-icons-png.flaticon.com/512/393/393205.png)`,
        }}
      ></div>
      <div className="card__info">
        <div className="card__info-name">{hotelInfo.name}</div>
        <div className="card__info-adress">
          {hotelInfo.address}, <i>{hotelInfo.city}</i>
        </div>
      </div>
    </div>
  );
};
