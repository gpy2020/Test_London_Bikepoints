import React, { Component } from "react";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import BikeStopOnMap from "../Views/BikestopOnMap";

class BikestopOnMapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bikestop: {},
      mapState: {
        center: [51.507351, -0.12766],
        zoom: 11
      }
    };
  }

  componentWillMount() {
    console.log(this.props.match.params.bikestopID);
    this.props.onLoadBikestops(this.props.match.params.bikestopID);
  }

  render() {
    console.log("render");
    console.log(this.props.bikestops);

    return (
      // <p>page</p>
      <BikeStopOnMap
        mapState={this.state.mapState}
        bikestop={this.props.bikestops[0]}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    bikestops: state.main.bikestops
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadBikestops: id => {
      console.log(`comp id: ${id}`);
      dispatch(actions.loadBikestops(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BikestopOnMapContainer));
