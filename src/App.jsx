import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState(
    JSON.parse(
      localStorage.getItem('shoppinglist')
    ) || []
  );
  const [newItem, setNewItem] = useState('');

  const reuseLocalStorage = (item) => {
    setItems(item);
    localStorage.setItem(
      'shoppinglist',
      JSON.stringify(item)
    );
  };

  const addItem = (item) => {
    const id = items.length
      ? items[items.length - 1].id + 1
      : 1;
    const myNewItem = {
      id,
      checked: false,
      item,
    };
    const listItems = [...items, myNewItem];
    reuseLocalStorage(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id
        ? { ...item, checked: !item.checked }
        : item
    );
    reuseLocalStorage(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter(
      (item) => item.id !== id
    );
    reuseLocalStorage(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
