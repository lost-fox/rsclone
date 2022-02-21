import { Divider } from "antd";
import RoomCancel from "./room-cancel";
import RoomRule from "./room-rule";
import { useEffect, useState } from "react";
import "./style.css";

const RoomDescription = () => {
  const [data, setData] = useState({
    descriptiontype_id: 0,
    extra_lines: {
      imp_info: "",
    },
    languagecode: "ru",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("description-hotel.json");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Divider orientation="left">Сведения о номере</Divider>
      <div className="room-description">
        <RoomRule impInfo={data.extra_lines.imp_info} />
        <RoomCancel description={data.description} />
      </div>
    </>
  );
};

export default RoomDescription;
