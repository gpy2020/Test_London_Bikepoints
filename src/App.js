import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

import * as actions from "./actions";
import { connect } from "react-redux";

class App extends Component {
  componentWillMount() {
    this.props.onGetBikestops();
  }

  render() {
    console.log(this.props.bikestops[0]);
    console.log("rendering");
    return (
      <div>
        {this.props.bikestops.map((bikestop, i) => {
          return (
            <Link key={i} to={`/map/${bikestop.id}`} className="bikestopLink">
              <div>
                <p className="paragraph">{`name: ${bikestop.commonName}`}</p>
                <p className="paragraph">{`coords: lat: ${
                  bikestop.lat
                } | lon: ${bikestop.lon}`}</p>
                <p className="paragraph">{`total amount of docks: ${
                  bikestop.additionalProperties[8].value
                }`}</p>
                <p className="paragraph">{`number of occupied docks: ${
                  bikestop.additionalProperties[6].value
                }`}</p>
                <p className="paragraph">{`number of free docks: ${
                  bikestop.additionalProperties[7].value
                }`}</p>
                <hr className="paragraph" size="1" noshade />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state bikestops:");
  console.log(state.main.bikestops);
  return {
    bikestops: state.main.bikestops
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBikestops: () => {
      dispatch(actions.loadBikestops());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
