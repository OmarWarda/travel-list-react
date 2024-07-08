import {useState} from 'react';
export default function Form({onAddItems}) {
  const [description, setDescription] = useState ('');
  const [quantity, setQuantity] = useState (1);

  function handleSubmit (event) {
    event.preventDefault (); // to prevent reloading the page

    if (!description) return;
    const newItem = {description, quantity, packed: false, id: Date.now ()};
    onAddItems (newItem);

    // Return the quantity and description to the default values
    setQuantity (1);
    setDescription ('');
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🔥</h3>
      <select
        value={quantity}
        onChange={e => setQuantity (Number (e.target.value))}
      >
        {Array.from ({length: 20}, (_, i) => i + 1).map (num => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={e => setDescription (e.target.value)} // e.target.value --> gives us what is written inside the input field
      />
      <button>Add</button>
    </form>
  );
}
