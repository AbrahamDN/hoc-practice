import React, { Component } from 'react';

import withData from '../withData';

const UserPosts = ({ data }) => (
  <div style={{ textAlign: 'left', padding: '1em 2em' }}>
    <h2>Posts</h2>
    {data.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <br />
      </div>
    ))}
  </div>
);

export default withData(UserPosts);
