import React from 'react';

const UserList = ({ users, selectedUserId, onSelectUser, searchTerm }) => {
  const filteredUsers = users.filter(user =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => onSelectUser('search', e.target.value)}
      />
      <select
        size="6"
        value={selectedUserId ?? ''}
        onChange={e => onSelectUser('select', parseInt(e.target.value))}
        style={{ width: '200px', marginTop: '10px' }}
      >
        {filteredUsers.map(user => (
          <option key={user.id} value={user.id}>
            {user.firstName} {user.lastName}
          </option>
        ))}
      </select>
    </>
  );
};

export default UserList;
