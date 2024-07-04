const initialItems = [
  {id: 1, description: 'Passports', quantity: 2, packed: false},
  {id: 2, description: 'Socks', quantity: 12, packed: false},
  {id: 2, description: 'Charger', quantity: 1, packed: true},
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
  return (
    <div className="add-form">
      <h3>What do you need for your trip? 🔥</h3>
    </div>
  );
}

function PackagingList () {
  return (
    <div className="list">
      <ul>
        {initialItems.map (item => <Item itemProp={item} />)}
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
