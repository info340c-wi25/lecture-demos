import { HeaderBar } from "./HeaderBar.jsx";
import { ShoppingList } from "./Items.jsx";
import { NewItemForm } from "./NewItemForm.jsx";
import { StoreList } from "./StoreList.jsx";

export default function App() {

   
  return (
    <div className="container-fluid d-flex flex-column vh-100">
      <HeaderBar />
      <div className="row flex-grow-1">
        {/* Sidebar - Store List */}
        <div className="col-md-3 col-lg-2 bg-light p-3">
          <div className=" h-100">
            <StoreList  />
          </div>
        </div>
  
        {/* Main Content */}
        <div className="col d-flex flex-column px-3">
          <ShoppingList  className="mb-3 flex-grow-1 overflow-auto" />
          <NewItemForm  className="mt-auto" />
        </div>
      </div>
    </div>
  );
  

}
