import React, { useState } from 'react';
import UserList from './UserList';
import UserDetails from './UserDetails';
import CreateUser from './CreateUser';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <h1>User Management App</h1>
      <CreateUser />
      <UserList onSelectUser={(id) => setSelectedUser(id)} />
      {selectedUser && <UserDetails userId={selectedUser} />}
    </div>
  );
};

export default App;
