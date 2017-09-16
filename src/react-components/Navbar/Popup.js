import React from 'react';


class Popup extends React.Component {

  renderPopupContent(){
    return(
      <section className="popup">
        <section className="popup-wrap">
          <img src="/img/close.png"
            onClick={this.props.hidePopup}/>
        </section>
        <section className="popup-content">
          <section>Popup content should be here</section>

        </section>

      </section>
    );

  }


  render(){
    return(
      <section>
        {/* ? means have a value and : means false */}

        {
          this.props.status ? this.renderPopupContent() : null
        }
      </section>
    );
  }
}


export default Popup;
