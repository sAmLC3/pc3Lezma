import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${userId}`)
      .then(response => setUser(response.data.data))
      .catch(error => console.error(error));
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.first_name} {user.last_name}</p>
      <p>Email: {user.email}</p>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    </div>
  );
};

export default UserDetails;