import React from 'react';

const UserForm = ({ firstName, lastName, onInputChange }) => (
  <>
    <div>
      <label>First Name:</label><br />
      <input
        type="text"
        value={firstName}
        onChange={e => onInputChange('firstName', e.target.value)}
      />
    </div>
    <div style={{ marginTop: '10px' }}>
      <label>Last Name:</label><br />
      <input
        type="text"
        value={lastName}
        onChange={e => onInputChange('lastName', e.target.value)}
      />
    </div>
  </>
);

export default UserForm;
