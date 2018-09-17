import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

function bikestopOnMap(props) {
  return (
    <div className="mapContainer">
      {props.bikestop && (
        <YMaps>
          <Map state={props.mapState}>
            <Placemark
              geometry={{
                coordinates: [+props.bikestop.lat, +props.bikestop.lon]
              }}
              properties={{
                hintContent: `${props.bikestop.commonName}`,
                balloonContent: `${props.bikestop.commonName} | 
              free places: ${props.bikestop.additionalProperties[7].value} | 
              occupied places: ${props.bikestop.additionalProperties[6].value}`
              }}
            />
          </Map>
        </YMaps>
      )}
      {!props.bikestop && <p>not found</p>}
    </div>
  );
}
export default bikestopOnMap;
