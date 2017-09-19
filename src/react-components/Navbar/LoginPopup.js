import React from 'react';
import Popup from './Popup';
import Firebase from 'firebase';

class LoginPopup extends React.Component {
  
  handleLogin = () => {
      var provider = new Firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');

      Firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log('Login successfully!', user);
      }).catch(function(error) {
        console.log('Failed!', error);
      });
  };
  render(){
    return(
     <Popup {...this.props} style="login-popup">

       <img src="/img/kitty.png"/>
       <h1>Login To Join The Community</h1>
       <p>Codehunt is the Community to share geek out about the latest code, podcast and news. Join us :)</p>
       <button className="facebook-btn" onClick={this.handleLogin}>Login with Facebook</button>
       <p>We will never post to your facebook without permission</p>
     </Popup>
    );
  }
}

export default LoginPopup;

// {...this.props} is the shortcut of status={this.props.status} hidePopup={this.props.hidePopup}
//{...this.props} it is a shortcode to write something like status={this.props.status} hidePopup={this.props.hidePopup}
