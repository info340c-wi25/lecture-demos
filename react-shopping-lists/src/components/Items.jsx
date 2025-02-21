// export function ShoppingList(props) {

//     const items = [{ timestamp: 1, store: 'QFC', name: 'Milk' }, { timestamp: 2, store: 'QFC', name: 'Bread' }, 
//                 { timestamp: 3, store: 'QFC', name: 'Eggs' }, { timestamp: 4, store: 'Target', name: 'Throw Rug' },
//                 { timestamp: 5, store: 'Walmart', name: 'Duct Tape' }];

//     const elemItemArray = items.map((item) => {
//         return <li key={item.timestamp}> {item.store} - {item.name}</li>
//     })


//     return (
//         <div>
//             <h2>Shopping List</h2>
//             <ul>
//                 {elemItemArray}
//             </ul>
//         </div>
//     )
// }


export function ShoppingList(props) {

    const items = [{ timestamp: 1, store: 'QFC', name: 'Milk' }, { timestamp: 2, store: 'QFC', name: 'Bread' },
        { timestamp: 3, store: 'QFC', name: 'Eggs' }, { timestamp: 4, store: 'Target', name: 'Throw Rug' },
        { timestamp: 5, store: 'Walmart', name: 'Duct Tape' }];
      
        // const itemList = props.itemList;        
        // const [itemList, setItemList] = useState(items); 
      
        function addItem (item) {
          const timestamp = Date.now();
          item = {timestamp, store: currentStore, name: item};
          setItemList([...itemList, item]);
        };


    const elemItemArray = items.map((itemObj) => {
        return <li key={itemObj.timestamp}> {itemObj.store} - {itemObj.name}</li>
    })


    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {elemItemArray}
            </ul>
        </div>
    )
}
