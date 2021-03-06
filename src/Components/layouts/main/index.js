import { BrowserRouter } from "react-router-dom";
import Routes from "../../../Routes/routes";
import Footer from "../footer";
import NavBar from "../NavBar";
import React, { Component } from "react";
import { connect } from "react-redux";

class Main extends Component {
  constructor(props) {
    super(props);
    this.props.readCookie();
  }
  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Type: state.Type,
    Hash: state.Hash,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    readCookie: () => dispatch({ type: "readCookie" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
