import { HeaderComponent } from './HeaderComponent.jsx';
import { MessageList } from './MessageList.jsx';

export default function App(props) {
    return (
        <div>
            <HeaderComponent />
            <MessageList />
        </div>
    );
}