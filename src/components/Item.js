export default function Item({ item, onHandleDelete, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >{`${item.quantity} ${item.description}`}</span>
      <button style={{ color: "red" }} onClick={() => onHandleDelete(item.id)}>
        X
      </button>
    </li>
  );
}
