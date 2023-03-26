import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Input = () => {
  return (
    <form className="addForm">
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        required
        autoFocus
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default Input;
