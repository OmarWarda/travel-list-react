import {useState} from 'react';
import Logo from './logo';
import Form from './form';
import PackagingList from './packingList';
import Stats from './stats';

const initialItems = [
  {id: 1, description: 'Passports', quantity: 2, packed: false},
  {id: 2, description: 'Socks', quantity: 12, packed: false},
  {id: 3, description: 'Charger', quantity: 1, packed: true},
];

export default function App () {
  const [items, setItems] = useState ([]);

  function handleAddItems (item) {
    setItems (items => [...items, item]);
  }
  function handleDelItems (id) {
    setItems (items => items.filter (item => item.id !== id));
  }
  function handleUpdate (id) {
    setItems (items =>
      items.map (
        item => (item.id === id ? {...item, packed: !item.packed} : item)
      )
    );
  }
  function handleClearList () {
    const confirmed = window.confirm (
      'Are you sure you want to delete all items?'
    );
    if (confirmed) setItems ([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDelItems}
        onUpdateItem={handleUpdate}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
