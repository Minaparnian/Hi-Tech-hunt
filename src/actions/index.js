import alt from '../alt';
import Firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD8Vk2Cgn7KJWJLid1dYtMx6jzZnlVFi-o",
  authDomain: "aus-tec-hunt.firebaseapp.com",
  databaseURL: "https://aus-tec-hunt.firebaseio.com/",
  storageBucket: "aus-tec-hunt.appspot.com"
};

Firebase.initializeApp(config);

class Actions {
  //is going to check if user is login, then is going to return all the data into profile variable, otherwise, user get null, and we are going to dispatch user to the store.
  initSession() {
    return (dispatch) => {

      Firebase.auth().onAuthStateChanged(function(result) {
        var profile = null;

        if (result) {
          profile = {
            id: result.uid,
            name: result.providerData[0].displayName,
            avatar: result.providerData[0].photoURL
          }
        }

        dispatch(profile);
      });
    }
  }

  login() {
    return (dispatch) => {
      var provider = new Firebase.auth.FacebookAuthProvider();
      Firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;

        var profile = {
          id: user.uid,
          name: user.providerData[0].displayName,
          avatar: user.providerData[0].photoURL
        }
          // is going to create a new user on firebase and under that is going to create a fb id and then its going to safe all information in the database via var profile.
        Firebase.database().ref('/users/'+user.uid).set(profile);
        dispatch(profile);

      }).catch(function(error) {
        console.log('Failed!', error);
      });
    }
  }

  logout() {
    return(dispatch) => {
      Firebase.auth().signOut().then(function() {
        // Sign-out successful.
        dispatch(null);
      }, function(error) {
        // An error happened.
        console.log(error);
      });
    }
  }

  getProducts() {
    return(dispatch) => {
      Firebase.database().ref('products').on('value', function(snapshot) {
        var products = snapshot.val();
        dispatch(products);
      });
    }
  }

}

export default alt.createActions(Actions);
