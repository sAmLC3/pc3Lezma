import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/users', { name, job })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateUser;