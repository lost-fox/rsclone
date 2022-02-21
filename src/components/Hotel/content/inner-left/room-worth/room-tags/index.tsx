import { Tag, Divider } from "antd";
import "./style.css";
import { useState, useEffect } from "react";
import { colors } from "../../../../constants/colors-tags";

const TagsWorth = () => {
  const [dataTags, setData] = useState([
    {
      facility_name: "Питание и напитки",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("facilities-hotel.json");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const result = dataTags.map((obj, i) => {
    const numColor = i > colors.length ? i - colors.length : i;
    return <Tag color={colors[numColor]}>{obj.facility_name}</Tag>;
  });

  return (
    <>
      <Divider orientation="left">Удобства</Divider>
      <div>{result}</div>
    </>
  );
};

export default TagsWorth;
