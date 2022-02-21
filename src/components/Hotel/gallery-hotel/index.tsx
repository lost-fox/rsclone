import ImageHotel from "./image-hotel";
import "./style.css";

interface CollageInterface {
  idHotel: number;
}

const Collage = ({ idHotel }: CollageInterface) => {
  return (
    <div className="collage">
      <div className="collage-right">
        <div className="collage-img_right collage-img">
          <ImageHotel num={0} idHotel={idHotel} />
        </div>
      </div>
      <div className="collage-left">
        <div className="collage-img_left collage-img">
          <ImageHotel num={1} idHotel={idHotel} />
        </div>
        <div className="collage-img_left collage-img">
          <ImageHotel num={2} idHotel={idHotel} />
        </div>
      </div>
    </div>
  );
};

export default Collage;
