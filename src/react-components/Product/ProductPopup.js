import React from 'react';
import Popup from '../Navbar/Popup';
import Upvote from './Upvote';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../../stores/ProductStore';
import Actions from '../../actions';

@connectToStores
class ProductPopup extends React.Component {
  constructor() {
    super();
  }

  static getStores() {
    return [ProductStore];
  }

  static getPropsFromStores() {
    return ProductStore.getState();
  }
  //the problem was insted of nextProps.status was nextStae.status
  shouldComponentUpdate(nextProps, nextState) {
    // this.props.status comes from the ProductItem, this is just checking whether or not we open the ProductPopup by comparing the current status with the next props status.
    if (nextProps.status && this.props.status != nextProps.status) {
      Actions.getComments(this.props.pid);
    }
    return true;
  }

  // we are going to check if a ProductPopup is open, and then we are going to request all the comments for that product only.
  shouldComponentUpdate(nextProps, nextState) {
    // this.props.status comes from the ProductItem, this is just checking whether or not we open the ProductPopup by comparing the current status with the next props status.
    if (nextProps.status && this.props.status != nextProps.status) {
      Actions.getComments(this.props.pid);
    }
    return true;
  }

  renderHeader(){
    return (
      <header style={{backgroundImage: 'url(' + this.props.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.props.name}</h1>
          <p>{this.props.description}</p>
          <section>
            <Upvote {...this.props} />
            <a className="getit-btn" href={this.props.link} target="_blank">GET IT</a>
          </section>
        </section>
      </header>
    );
  }



  handleComment = (e) => {
    //number 13 means return or enter.
    if(e.keyCode === 13 && e.target.value.length > 0) {
      var comment = {
        content: e.target.value,
        name: this.props.user.name,
        avatar: this.props.user.avatar
      }
      Actions.addComment(this.props.pid, comment);
      e.target.value = null;
    }
  };

  renderBodyDiscussion() {
   return (
     <section className="discussion">
       <h2>Discussion</h2>
       {
         this.props.user
         ?
         <section className="post-comment">
           <img className="medium-avatar" src={this.props.user.avatar}/>
         <input placeholder="What do you think about this product?" onKeyUp={this.handleComment}/>
         </section>
         :
         null
       }
       {this.renderComments()}
     </section>
   );
  }

  renderBody() {
    return (
      <section className="product-popup-body">
        <main>
          {this.renderBodyDiscussion()}
        </main>
      </section>
    );
  }

  renderComments() {
    return (
      <ul className="comment-list">
        {
          this.props.comments.map(function(comment, idx) {
            return (
              <li key={idx}>
                <img className="medium-avatar" src={comment.avatar}/>
                <section>
                  <strong>{comment.name}</strong>
                  <p>{comment.content}</p>
                </section>
              </li>
            )
          })
        }
      </ul>
    );
  }

  render(){
    return(
      <Popup {...this.props} style="product-popup">
      {this.renderHeader()}
      {this.renderBody()}
      </Popup>
    );
  }
}


export default ProductPopup;
  //line91: we are going to use a map function to look through an array of comments and for every item inside, we need to identify the key, in this case we will use the index at the map function.
