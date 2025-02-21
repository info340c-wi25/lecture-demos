import { useState } from "react";

export function StoreList(props) {
    // const { stores, currentStore} = props;
    const currentStore = "qfc";
    const stores = [
        { timestamp: 1, name: 'Amazon' },
        { timestamp: 2, name: 'Walmart' },
        { timestamp: 3, name: 'Target' },
        { timestamp: 4, name: 'QFC' },
      ];
    
    const storeList = stores.map((store) => {
        let classList = "list-group-item bg-secondary text-light"; // Apply Bootstrap styles
        if (store.name === currentStore) {
            classList = "list-group-item text-white bg-dark";
        }
        return <li key={store.timestamp} className={classList} onClick={handleCurrentStoreClick}>{store.name}</li>;
    });

    const [newStore, setNewStore] = useState("");
    
    const handleInputChange = (event) => {
        setNewStore(event.target.value); // Update state as user types
    };

    // const addNewStore = (event) => {
    //     if (newStore.trim() !== "") {
    //         props.addStore(newStore); // Add new item to list
    //         setNewStore(""); // Clear input field after adding
    //     }
    // };

    function handleCurrentStoreClick(event) {
        console.log("clicked on:", event.target.innerText);
        props.changeCurrentStore(event.target.innerText);
    }

    return (
        <div>
            <h2>Store List</h2>
            <nav className="bg-secondary text-light ">
                <ul className="list-group ">

                    {storeList}

                </ul>
            </nav>
            <input
                type="text"
                value={newStore}
                onChange={handleInputChange}
                placeholder="Type a new store"
            />
             <button >Add Store</button>
        </div>
    )
}
