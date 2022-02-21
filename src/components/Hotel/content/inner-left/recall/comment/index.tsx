import "./style.css";
import { Comment, List } from "antd";
import { useState, useEffect } from "react";

const Commentary = () => {
  const [data, setData] = useState([
    {
      review_id: 1231231,
      pros: "qweqwe",
      avatar: "https://joeschmoe.io/api/v1/random",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("reviews-hotel.json");
        const json = await response.json();
        json.result.map((e: { avatar: string }) => {
          e.avatar = "https://joeschmoe.io/api/v1/random";
        });
        setData(json.result);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <List
      className="comment-list"
      header={`Последние ${data.length} комментария`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <li>
          <Comment
            author={item.review_id}
            avatar={item.avatar}
            content={item.pros}
          />
        </li>
      )}
    />
  );
};

export default Commentary;
