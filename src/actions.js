import axios from "axios";
import * as actionTypes from "./actionTypes";

export function setBikestops(bikestops) {
  return { type: actionTypes.SET_BIKESTOPS, payload: bikestops };
}

export function loadBikestops(id) {
  console.log("loading bikestops");
  console.log(`id loading: ${id}`);
  return dispatch => {
    const url = "https://api.tfl.gov.uk/bikepoint";
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        console.log(`id: ${id}`);
        id
          ? dispatch(setBikestops([res.data.find(o => o.id === id)]))
          : dispatch(setBikestops(res.data));
      })
      .catch(err => console.log(err));
  };
}
