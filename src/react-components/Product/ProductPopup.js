import React from 'react';
import Popup from '../Navbar/Popup';


class ProductPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {
        id: 2,
        name: 'Code4Startup',
        link: 'https://code4startup.com',
        media: '/img/code4startup.jpeg',
        upvote: 278,
        description: 'Code for startups',
        maker: {
          name: 'Mina',
          avatar: '/img/Mina.jpg'
        }
      },
      comments: [
        {
          name:"Mina",
          avatar: "/img/Mina.jpg",
          content: "I love this product"
        },
        {
          name:"Miriam",
          avatar: "/img/Miriam.jpg",
          content: "Me too"
        }
      ]
    }
  }

  renderUpvoteButton() {
    return(
      <a className="upvote-button" href="#">
        <span>
          <i className="fa fa-sort-asc"></i>
        </span>
        {/* we put this.state as we are referring to the above state */}
          {this.state.product.upvote}
      </a>

    );
  }

  renderHeader(){
    return (
      <header style={{backgroundImage: 'url(' + this.state.product.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.state.product.name}</h1>
          <p>{this.state.product.description}</p>
          <section>
            {this.renderUpvoteButton()}
            <a className="getit-btn" href={this.state.product.link} target="_blank">GET IT</a>
          </section>
        </section>
      </header>
    );
  }

  renderBodyDiscussion() {
   return (
     <section className="discussion">
       <h2>Discussion</h2>
       <section className="post-comment">
         <img className="medium-avatar" src="/img/Mina.jpg"/>
         <input placeholder="What do you think about this product?"/>
       </section>
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
          this.state.comments.map(function(comment, idx) {
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
