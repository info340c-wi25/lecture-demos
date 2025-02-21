import { useState } from 'react';

export function NewItemForm(props) {
    const stores = props.stores;

    const [selectedStore, setSelectedStore] = useState('QFC'); // Default store
    const [item, setItem] = useState(''); // Default item

    const onSelect = (eventKey) => {
        setSelectedStore(eventKey); // Update selected store when a new one is chosen
    };

    const handleChange = (event) => {
        setItem(event.target.value);
        // props.changeCurrentStore(selectedStore);
    }

    function handleStoreChange(event) {
        console.log("Selected store:", event.target.value);
        onSelect(event.target.value)
        props.changeCurrentStore(event.target.value); // Assuming this updates the state
    }
    const handleClick = (event) => {
        props.addItem(item);
    }

    // Note the dropdown items transform is done outside of the return statement
    const dropDownStoreItems = stores.map((store) => (
        <option key={store.timestamp} value={store.name} >
            {store.name}
        </option>
    ));



    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="store">Store</label>
                    {/* <select id="store" onChange={(e) => onSelect(e.target.value)} value={props.currentStore}> */}
                    <select id="store" onChange={handleStoreChange} value={props.currentStore}>
                        <option value="">Select a store</option>
                        {dropDownStoreItems}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="item">Item</label>
                    <input
                        type="text"
                        id="item"
                        placeholder="Item name"
                        onChange={handleChange}
                        value={item}
                    />
                </div>

                <button type="button" onClick={handleClick}>
                    Add
                </button>
            </form>
        </div>
    );
}
