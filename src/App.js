import './App.css';
import ItemInput from "./components/ItemInput";
import {useState} from "react";
import ItemsList from "./components/ItemsList";

function App() {
  const [items, setItems] = useState([])

  const addItem = (newItem) => {
    const possibleDuplicate = items.find((item) => item.date === newItem.date);
    if (possibleDuplicate) {
         const newItems = items.map((item) => {
             if (item.id === possibleDuplicate.id) {
                 item.distance = String(Number(item.distance) + Number(newItem.distance))
             }
             return item
         })
         setItems(newItems)
    }
    else {
        setItems([...items, newItem]);
    }
  }

  const deleteItem = (deletedItemId) => {
    const newItemsList = items.filter((item) => item.id !== deletedItemId)
    setItems(newItemsList)
  }
  return (
      <div>
        <ItemInput addItem={addItem}/>
        <ItemsList items={items} deleteFunc={deleteItem}/>
      </div>
  );
}

export default App;
