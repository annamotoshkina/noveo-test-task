import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setToken } from '../actions';

const TOKEN_PARAMETER = 'access_token';
const TOKEN_URL = 'https://oauth.yandex.ru/authorize?response_type=token&client_id=2dd948c2d98142adb10d2f0e95b733fa';

class Login extends Component {
  componentDidMount() {
    const location = window.location.href;
    let tokenStartIndex = location.indexOf(TOKEN_PARAMETER);
    if (tokenStartIndex >= 0) {
      tokenStartIndex = tokenStartIndex + TOKEN_PARAMETER.length + 1;
      let tokenEndIndex = location.indexOf('&');
      if (tokenEndIndex < 0) {
        tokenEndIndex = location.length;
      }

      const token = location.substring(tokenStartIndex, tokenEndIndex);
      this.props.setToken(token);
    } else {
      window.location = TOKEN_URL;
    }
  }

  render() {
    if (this.props.isAuthorized) {
      this.props.router.push("/");
    }

    return (
      <div />
    );
  };
}

const mapStateToProps = (state) => ({
  isAuthorized: state.token !== null,
  state: state,
});

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);