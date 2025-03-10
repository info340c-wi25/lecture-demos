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

    const itemList = props.itemList;
                    

    const elemItemArray = itemList.map((itemObj) => {
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
