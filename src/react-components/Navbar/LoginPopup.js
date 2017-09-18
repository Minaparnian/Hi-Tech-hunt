import React from 'react';
import Popup from './Popup';

class LoginPopup extends React.Component {
  render() {
    return (
      <Popup {...this.props} style="login-popup">
        <img src="/img/kitty.png"/>
        <h1>Login to Join The Comnunity</h1>
        <p>CodeHunt is a community to share and geek out about the latest code, podcast and news. Join us :)</p>
        <button className="facebook-btn">Login with Facebook</button>
        <p>We'll never post to Facebook without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;

//{...this.props} it is a shortcode to write something like status={this.props.status} hidePopup={this.props.hidePopup}
