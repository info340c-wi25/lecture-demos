// import { HeaderBar } from "./HeaderBar.jsx";
// import { ShoppingList } from "./Items.jsx";
// import { NewItemForm } from "./NewItemForm.jsx";

// export default function App() {

//   const stores = [
//     { timestamp: 1, name: 'Amazon' },
//     { timestamp: 2, name: 'Walmart' },
//     { timestamp: 3, name: 'Target' },
//     { timestamp: 4, name: 'QFC' },
//   ];

//   return (

//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar />
//       <div className="row flex-grow-1">
//         <div className="col-3">
//           <StoreList stores={stores} />
//         </div>
//         <div className="col d-flex flex-column">
//           <ShoppingList />
//           <NewItemForm stores={stores}/>
//         </div>
//       </div>
//     </div>
//   )
// }

// function StoreList(props) {
//   const { stores } = props;


//   return (
//     <div>
//       <h2>Store List</h2>
//       <nav className="bg-secondary text-light py3 h-100">
//         <ul>

//           <li className='text-light'> {stores[0].name}</li>
//           <li className='text-light'> {stores[1].name}</li>
//           <li className='text-light'> {stores[2].name}</li>
//           <li className='text-light'> {stores[3].name}</li>

//         </ul>
//       </nav>
//     </div>
//   )
// }

import { HeaderBar } from "./HeaderBar.jsx";
import { ShoppingList } from "./Items.jsx";
import { NewItemForm } from "./NewItemForm.jsx";
import { StoreList } from "./StoreList.jsx";
import { useState } from 'react';

export default function App() {

  const items = [{ timestamp: 1, store: 'QFC', name: 'Milk' }, { timestamp: 2, store: 'QFC', name: 'Bread' },
  { timestamp: 3, store: 'QFC', name: 'Eggs' }, { timestamp: 4, store: 'Target', name: 'Throw Rug' },
  { timestamp: 5, store: 'Walmart', name: 'Duct Tape' }];

  const [currentStore, setCurrentStore] = useState('QFC'); // Default store

  function changeCurrentStore (store) {
    setCurrentStore(store);
  }


  const [itemList, setItemList] = useState(items); // Default store

  function addItem (item) {
    const currentTime = Date.now();
    item = {timestamp:currentTime, store: currentStore, name: item};
    console.log(item);
    setItemList([...itemList, item]);
  };


  const stores = [
    { timestamp: 1, name: 'Amazon' },
    { timestamp: 2, name: 'Walmart' },
    { timestamp: 3, name: 'Target' },
    { timestamp: 4, name: 'QFC' },
  ];

  const [storeList, setStoreList] = useState(stores); // Default store

  function addStore (store) {
    const timestamp = Date.now();
    store = {timestamp, name: store};
    setStoreList([...storeList, store]);
  }

  
 
  return (
    <div className="container-fluid d-flex flex-column vh-100">
      <HeaderBar />
      <div className="row flex-grow-1">
        {/* Sidebar - Store List */}
        <div className="col-md-3 col-lg-2 bg-light p-3">
          <div className=" h-100">
            <StoreList 
              stores={storeList} 
              addStore={addStore} 
              currentStore={currentStore} 
              changeCurrentStore={changeCurrentStore} 
            />
          </div>
        </div>
  
        {/* Main Content */}
        <div className="col d-flex flex-column px-3">
          <ShoppingList itemList={itemList} className="mb-3 flex-grow-1 overflow-auto" />
          <NewItemForm stores={storeList} addItem={addItem} currentStore={currentStore} className="mt-auto" />
        </div>
      </div>
    </div>
  );
  

}
