export default function Item({ item, onDeleteItem, addToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item?.packed}
        onChange={() => {
          addToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} : {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
