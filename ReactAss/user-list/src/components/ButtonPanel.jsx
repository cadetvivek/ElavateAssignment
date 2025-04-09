import React from 'react';

const ButtonPanel = ({ onCreate, onUpdate, onDelete, onCancel, isSelected, isFormFilled }) => (
  <div style={{ marginTop: '20px' }}>
    <button onClick={onCreate} disabled={!isFormFilled}>Create</button>
    <button onClick={onUpdate} disabled={!isSelected}>Update</button>
    <button onClick={onDelete} disabled={!isSelected}>Delete</button>
    <button onClick={onCancel} disabled={!isSelected}>Cancel</button>
  </div>
);

export default ButtonPanel;
