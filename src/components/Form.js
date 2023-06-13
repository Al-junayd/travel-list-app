import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("1");

  function handleChange(e) {
    setDescription(e.target.value);
  }
  function handleSelect(e) {
    setQuantity(Number(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your Trip? ❓</h3>
      <select value={quantity} onChange={handleSelect}>
        {Array.from({ length: 20 }, (_, i) => i + 1)?.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={handleChange}
        placeholder="Item..."
      />
      <button>Add</button>
    </form>
  );
}
