import React from 'react';



class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      ProductList: [
        {
          id: 1,
          name: 'Codeacademy',
          link: 'https://codeacademy.com',
          media: '/img/codeacademy.jpeg',
          upvote: 169,
          description: 'Code for anyone',
          maker: {
            name: 'Miriam',
            avatar: '/img/Miriam.jpg'
          }

        },
        {
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

        }
      ]
    }
  }
  render(){
    return(
      <section>
          <header>
            <img src="/img/banner.jpeg" width="100%" />
          </header>

          <section>
            <section className="container">
            <ul className="product-list">
              <li className="product-item">
                <a className="upvote-button" href="#">
                  <span>
                    <i className="fa fa-sort-asc"></i>
                  </span>
                  <br/>
              
                {this.state.productList[0].upvote}
                </a>
              </li>

            </ul>
            </section>
          </section>
      </section>

    );
  }
}


export default HomePage;
