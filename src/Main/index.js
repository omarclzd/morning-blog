import React, { Component } from "react";
import Form from '../Form'


export default class Main extends Component {
  state = {
    isPosting : true,
    posts : [
      {
        title : 'My Day',
        author : 'Omar',
        post : 'Esse anim dolor deserunt esse quis laboris occaecat laboris ipsum in. Est esse exercitation commodo ex reprehenderit. Velit consectetur in velit deserunt excepteur Lorem adipisicing. Deserunt sit et id labore mollit minim nisi nostrud sit. Veniam Lorem velit excepteur in minim.'

      }
    ]
  };

  handleClick = event => {
    this.setState({
      isPosting : !this.state.isPosting
    });
  };

  handleAddPost =({title, author, post})=> {
    this.setState({
      posts : [{title, author, post}, ...this.state.posts]
    })
  }

  handleDeletePost = postIdx => {
    //we cannot mutate state directly
    const newStateArray = this.state.posts
    .filter((elem, idx) => idx !== postIdx);

    this.setState({ posts: newStateArray });
  }

  render() {

    const postsList = this.state.posts.map((post, index) => {
      return (
        
      <li key={index}>
        <h3>{post.title}</h3>
        <h5>{post.author}</h5>
        <h6>{post.post}</h6>
        <button onClick={() => this.handleDeletePost(index)}>Delete</button>
      </li>  
      )
    })

    return (
      <div>
        <header>

        <h1>Party Blog</h1>
        </header>
        <section>
          <button onClick={this.handleClick}>toggle</button>
          {!!this.state.isPosting ? (
          <Form handleAddPost={this.handleAddPost} />
          ): null}
          <ul>{postsList}</ul>
        </section>
       
      </div>
    );
  }
}
