import { useState } from "react";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import Logo from "./components/Logo";
import Form from "./components/Form";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  const handleDelete = (id) => {
    const undeletedItems = items.filter((item) => item.id !== id);
    setItems(undeletedItems); //here
  };
  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    ); //here
  };

  const handleClear = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onHandleDelete={handleDelete}
        onhandleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
