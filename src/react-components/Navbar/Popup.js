import React from 'react';

class Popup extends React.Component {
  renderPopupContent(){
    return (
      <section className="popup">
        <section className="popup-wrap">

          <img src="/img/close.png" onClick={this.props.hidePopup}/>
        </section>
        <section className={"popup-content " + this.props.style}>
          <section>{this.props.children}</section>
        </section>

      </section>
    );
  }
  render() {
    return (
      <section>
        {
          this.props.status? this.renderPopupContent() : null
        }
      </section>
    );
  }
}

// this.props.hidePopup was passed by the Popup in Navbar/index.js
//we dont have the pop up come up straight away because when we first render the Navbar, the popupStatus is false, so whe you click on login, we execute the showPopup, which set the status to true, and then it pass that status to the Popup Component.
//  this.props.status? equals true, renderPopupContent, otherwise false.
//when we close the button, we run the hidePopup function that put the status to false and stop rending Popup Component
//this.props.children will show everything we have between open and close tags of Popup(in this case, it will show the Popup under LoginPopup class.)
export default Popup;
