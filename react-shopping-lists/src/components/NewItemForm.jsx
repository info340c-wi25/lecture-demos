// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Dropdown from 'react-bootstrap/Dropdown';

// export function NewItemForm(props) {

//     const stores = props.stores;

//     const dropDownStoreItems = stores.map((store) => {
//         const dropdownElem = <Dropdown.Item >store.name</Dropdown.Item>
//         return dropdownElem;
//         console.log(dropdownElem);
//     })

//     const currentStore = 'QFC';

//     return (
//         <div>
//             <Form>
//                 <Form.Group className="mb-3" controlId="formSelectStore">
//                     <Form.Label>Store</Form.Label>
//                     <Form.Control type="input" placeholder={currentStore} />
//                     <Form.Text className="text-muted">
//                         Use the drop down to select a different store.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>

//         </div>
//     )
// }

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Dropdown from 'react-bootstrap/Dropdown';

// export function NewItemForm(props) {
//     const stores = props.stores;
//     const [selectedStore, setSelectedStore] = useState('QFC'); // Default store

//     const onSelect = (eventKey) => {
//         setSelectedStore(eventKey); // Update selected store when a new one is chosen
//     };

//     // Create dropdown items outside of the return statement
//     const dropDownStoreItems = stores.map((store) => (
//         <Dropdown.Item key={store.timestamp} eventKey={store.name}>
//             {store.name}
//         </Dropdown.Item>
//     ));

//     console.log(dropDownStoreItems);
//     return (
//         <div>
//             <Form>
//                 <Form.Group className="mb-3" controlId="formSelectStore">
//                     <Form.Label>Store</Form.Label>
//                     <Dropdown onSelect={onSelect}>
//                         <Dropdown.Toggle variant="secondary">
//                             {selectedStore || "Select a store"}
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu>{dropDownStoreItems}</Dropdown.Menu>
//                     </Dropdown>
//                     <Form.Text className="text-muted">
//                         Use the drop-down to select a different store.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Item</Form.Label>
//                     <Form.Control type="text" placeholder="item name" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Add
//                 </Button>
//             </Form>
//         </div>
//     );
// }

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
    }

    const handleClick = (event) => {
        props.addItem(item);
    }

    // Note the dropdown items transform is done outside of the return statement
    const dropDownStoreItems = stores.map((store) => (
        <option key={store.timestamp} value={store.name}>
            {store.name}
        </option>
    ));



    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="store">Store</label>
                    <select id="store" onChange={(e) => onSelect(e.target.value)} value={props.currentStore}>
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
