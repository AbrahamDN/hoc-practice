import React from 'react';

import withData from '../../withData';

const UserList = ({ data }) => (
  <div style={{ textAlign: 'left' }}>
    <h2>Users</h2>
    {data.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </div>
);

export default withData(UserList);
