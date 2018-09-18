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
              options={{
                iconColor:
                  props.bikestop.additionalProperties[7].value > 0
                    ? "#0095b6"
                    : "#686868"
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
