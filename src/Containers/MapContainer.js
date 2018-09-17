import React, { Component } from "react";
import Map from "../Views/Map";
import * as actions from "../actions";
import { connect } from "react-redux";

class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      center: [51.507351, -0.12766],
      zoom: 9
    };
  }

  componentWillMount() {
    this.props.onLoadBikestops();
  }

  render() {
    return <Map mapState={this.state} bikestops={this.props.bikestops} />;
  }
}

const mapStateToProps = state => {
  return {
    bikestops: state.main.bikestops
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadBikestops: () => {
      dispatch(actions.loadBikestops());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
