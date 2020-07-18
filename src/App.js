import React from 'react';
import './App.css';

import UserList from './components/user-lists/user-lists.component';
import UserPosts from './user-posts/user-posts.component';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Higher Order Components</h1>
        <UserList sourceData='https://jsonplaceholder.typicode.com/users' />
        <UserPosts sourceData='https://jsonplaceholder.typicode.com/posts' />
      </header>
    </div>
  );
}

export default App;
