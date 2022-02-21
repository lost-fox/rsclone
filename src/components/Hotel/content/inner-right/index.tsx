import FormBooking from "./form-booking";
import "./style.css";
import MapContainer from "./map-container";

const InnerRight = () => {
  return (
    <div className="inner-right">
      <FormBooking />
      <MapContainer lng={-71.0815} lat={42.3445} />
    </div>
  );
};

export default InnerRight;
