import "./style.css";
import { Image } from "antd";
import { useEffect, useState } from "react";
import React from "react";

interface NumbersPhoto {
  num: number;
  idHotel: number;
}

const ImageHotel = (props: NumbersPhoto) => {
  const testURL =
    "https://thumbs.gfycat.com/PotableEmbarrassedFrenchbulldog-max-1mb.gif";
  const [imageURL, setImageURL] = useState(testURL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data-image.json");
        const json = await response.json();
        setImageURL(json[props.num].url_max);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  });

  return (
    <Image width={"100%"} height={"100%"} src={imageURL} preview={false} />
  );
};

export default ImageHotel;
