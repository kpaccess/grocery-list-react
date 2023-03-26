import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const Input = ({
  newItem,
  setNewItem,
  handleSubmit,
}) => {
  const inputRef = useRef();
  return (
    <form
      className="addForm"
      onSubmit={handleSubmit}
    >
      <label htmlFor="addItem">Add Item</label>
      <input
        ref={inputRef}
        type="text"
        id="addItem"
        value={newItem}
        onChange={(e) =>
          setNewItem(e.target.value)
        }
        placeholder="Add Item"
        required
        autoFocus
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default Input;
