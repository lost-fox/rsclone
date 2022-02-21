import ContentHotel from "./content";
import Collage from "./gallery-hotel";
import "./style.css";
import { useEffect, useState } from "react";

const Hotel = () => {
  const [data, setData] = useState([]);
  const [idHotel, setIdHotel] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data-hotels.json");
        const json = await response.json();
        setData(json.result[4]);
        setIdHotel(json.result[4].hotel_id);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Collage idHotel={idHotel} />
      <ContentHotel data={data} />
    </>
  );
};

export default Hotel;
