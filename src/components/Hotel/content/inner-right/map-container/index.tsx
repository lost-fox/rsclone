import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2s4LXBsIiwiYSI6ImNrdnF5MWkzbDAybHMycG05YWtjeGl3MWUifQ.sZhc173ucmr_lRfVw7Ww6w";

interface MapCenter {
  lng: number;
  lat: number;
}

const MapContainer = (props: MapCenter) => {
  const mapContainer: any = useRef("");
  const map: any = useRef("");
  const [lng] = useState(props.lng);
  const [lat] = useState(props.lat);
  const [zoom] = useState(16);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default MapContainer;
