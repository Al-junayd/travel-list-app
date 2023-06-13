import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onHandleDelete,
  onToggleItem,
  onhandleClear,
}) {
  const [sortby, setSortBy] = useState("input");
  let sortedItems;

  if (sortby === "input") sortedItems = items;

  if (sortby === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onToggleItem={onToggleItem}
              onHandleDelete={onHandleDelete}
            />
          );
        })}
      </ul>
      <div className="actions" onChange={(e) => setSortBy(e.target.value)}>
        <select value={sortby}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onhandleClear}>Clear list</button>
      </div>
    </div>
  );
}
