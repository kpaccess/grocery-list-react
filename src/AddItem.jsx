import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Input = ({
  newItem,
  setNewItem,
  handleSubmit,
}) => {
  return (
    <form
      className="addForm"
      onSubmit={handleSubmit}
    >
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        value={newItem}
        onChange={(e) =>
          setNewItem(e.target.value)
        }
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
