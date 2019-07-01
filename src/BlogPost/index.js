import React from 'react';

function BlogPost (props) {
  return (
      <li>
        <h3>{props.post.title}</h3>
        <h5>{props.post.author}</h5>
        <h6>{props.post.post}</h6>
        <button onClick={() => props.handleDeletePost(props.index)}>Delete</button>
      </li>  
  )
}

export default BlogPost