import {useState} from 'react';
const initialItems = [
  {id: 1, description: 'Passports', quantity: 2, packed: false},
  {id: 2, description: 'Socks', quantity: 12, packed: false},
  {id: 3, description: 'Charger', quantity: 1, packed: true},
];

export default function App () {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}

function Logo () {
  return <h1>🌴 Far Away 👜</h1>;
}

function Form () {
  const [description, setDescription] = useState ('');
  const [quantity, setQuantity] = useState (1);

  function handleSubmit (event) {
    event.preventDefault (); // to prevent reloading the page

    if (!description) return;
    const newItem = {description, quantity, packed: false, id: Date.now ()};
    // Now we need to pass this newItem to component PackagingList
    console.log (newItem);

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

function PackagingList () {
  return (
    <div className="list">
      <ul>
        {initialItems.map (item => <Item itemProp={item} key={item.id} />)}
      </ul>
    </div>
  );
}
function Item({itemProp}) {
  return (
    <li style={itemProp.packed ? {textDecoration: 'line-through'} : {}}>
      <span>{itemProp.quantity} {itemProp.description}</span>
      <button>❌</button>
    </li>
  );
}

function Stats () {
  return (
    <footer className="stats">
      <em>
        👜 You have packed X items on your list. and youalready packed X (X%)
      </em>
    </footer>
  );
}
