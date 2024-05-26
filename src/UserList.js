import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => setUsers(response.data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
            <button onClick={() => onSelectUser(user.id)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;