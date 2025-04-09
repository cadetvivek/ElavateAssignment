import React, { useState } from 'react';
import initialUsers from './data/initialUsers';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import ButtonPanel from './components/ButtonPanel';
import './App.css';

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleUserInteraction = (type, value) => {
    if (type === 'search') {
      setSearchTerm(value);
    } else if (type === 'select') {
      const user = users.find(u => u.id === value);
      setSelectedUserId(value);
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  };

  const handleInputChange = (field, value) => {
    if (field === 'firstName') setFirstName(value);
    else setLastName(value);
  };

  const handleCreate = () => {
    const newUser = {
      id: Date.now(),
      firstName,
      lastName
    };
    setUsers([...users, newUser]);
    clearForm();
  };

  const handleUpdate = () => {
    setUsers(users.map(user =>
      user.id === selectedUserId ? { ...user, firstName, lastName } : user
    ));
    clearForm();
  };

  const handleDelete = () => {
    setUsers(users.filter(user => user.id !== selectedUserId));
    clearForm();
  };

  const handleCancel = () => clearForm();

  const clearForm = () => {
    setSelectedUserId(null);
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="app">
      <div className="left-panel">
        <UserList
          users={users}
          selectedUserId={selectedUserId}
          onSelectUser={handleUserInteraction}
          searchTerm={searchTerm}
        />
      </div>
      <div className="right-panel">
        <UserForm
          firstName={firstName}
          lastName={lastName}
          onInputChange={handleInputChange}
        />
        <ButtonPanel
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onCancel={handleCancel}
          isSelected={selectedUserId != null}
          isFormFilled={firstName && lastName}
        />
      </div>
    </div>
  );
};

export default App;
