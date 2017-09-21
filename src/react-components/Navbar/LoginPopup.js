import React from 'react';
import Popup from './Popup';
import Actions from '../../actions';

class LoginPopup extends React.Component {

<<<<<<< HEAD
  handleGithubLogin = () => {
      Actions.loginGithub();
=======
  handleTwitterLogin = () => {
      Actions.loginTwitter();
>>>>>>> 663c2a676fb12b77d52760dd76ef83a62bee8cb1
      // this will make sure after you log in, we close the login popups.
      this.props.hidePopup();
  };

  handleFacebookLogin = () => {
      Actions.loginFacebook();
      // this will make sure after you log in, we close the login popups.
      this.props.hidePopup();
  };



  render() {
    return (
      <Popup {...this.props} style="login-popup">
        <img src="/img/logo2.png" className="logo"/>
        <h1>Login to Join The Community</h1>
        <p>Hi-tech hunt is a Community to share and geek out about the latest code, podcast and news. Join us :)</p>
<<<<<<< HEAD
        <img src="img/twitter.png" className="facebook-btn" onClick={this.handleTwitterLogin}/>
        <img src="img/github.png" className="facebook-btn" onClick={this.handleGithubLogin}/>
        <img src="img/google.png" className="facebook-btn" onClick={this.handleGoogleLogin}/>
        <img src="img/facebook.png" className="facebook-btn" onClick={this.handleFacebookLogin}/>
=======
      <img src="img/twitter.png" className="facebook-btn" onClick={this.handleTwitterLogin}/>
        <img src="img/github.png" className="facebook-btn" onClick={this.handleLogin}/>
        <img src="img/google.png" className="facebook-btn" onClick={this.handleLogin}/>
      <img src="img/facebook.png" className="facebook-btn" onClick={this.handleFacebookLogin}/>
>>>>>>> 663c2a676fb12b77d52760dd76ef83a62bee8cb1

        <p>We'll never post without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;

// {...this.props} is the shortcut of status={this.props.status} hidePopup={this.props.hidePopup}
//{...this.props} it is a shortcode to write something like status={this.props.status} hidePopup={this.props.hidePopup}
