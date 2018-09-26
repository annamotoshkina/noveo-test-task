import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from './components/Main';

import './App.css';

class App extends Component {
  render() {
    if (this.props.isAuthorized) {
      return (
        <Main router={this.props.router}/>
      );
    }

    this.props.router.push('/login');
    return (
      <div />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: state.token !== null,
});

export default connect(
  mapStateToProps
)(App);
