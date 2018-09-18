import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./style.css";

function map(props) {
  return (
    <div className="mapContainer">
      <YMaps>
        <Map state={props.mapState}>
          {props.bikestops.map((bikestop, i) => {
            return (
              <Placemark
                key={i}
                geometry={{
                  coordinates: [+bikestop.lat, +bikestop.lon]
                }}
                properties={{
                  hintContent: `${bikestop.commonName}`,
                  balloonContent: `${bikestop.commonName} | 
                free places: ${bikestop.additionalProperties[7].value} | 
                occupied places: ${bikestop.additionalProperties[6].value}`
                }}
                options={{
                  iconColor:
                    bikestop.additionalProperties[7].value > 0
                      ? "#0095b6"
                      : "#686868"
                }}
              />
            );
          })}
        </Map>
      </YMaps>
    </div>
  );
}
export default map;
