import * as actionTypes from "./actionTypes";

const initialState = {
  bikestops: []
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_BIKESTOPS: {
      console.log("setting bikestops ... ");
      console.log("old bikestops: ");
      console.log(state.bikestops);
      console.log("new bikestops:");
      console.log(action.payload);
      return { ...state, bikestops: action.payload };
    }
    default:
      return state;
  }
}
export default mainReducer;
