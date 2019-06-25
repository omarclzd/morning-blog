import React, { Component } from "react";


export default class Main extends Component {
  state = {
    post : [
      {
        title : 'My Day',
        author : 'Omar',
        post : 'Esse anim dolor deserunt esse quis laboris occaecat laboris ipsum in. Est esse exercitation commodo ex reprehenderit. Velit consectetur in velit deserunt excepteur Lorem adipisicing. Deserunt sit et id labore mollit minim nisi nostrud sit. Veniam Lorem velit excepteur in minim.'

      }
    ]
  };

  handleClick = event => {
    this.setState({
      name: "Not Andrew"
    });
  };

  render() {
    const posts = this.state.post.map((post, idex) => {
      return (
        
      <li>
        <h3>{post.title}</h3>
      </li>  
      )
    })

    return (
      <div>
        <heading>

        <h1>Party Blog</h1>
        </heading>
        <section>
          <ul>
            {posts}
          </ul>
        </section>
       
      </div>
    );
  }
}
