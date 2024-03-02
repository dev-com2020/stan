import { Main } from "./Main"
import { Header } from "./Header";
import './App.css';
import { Provider } from "react-redux";
import { store } from "./store/store";


function App() {
return (
  <div>
    <Provider store={store}>
    <Header/>
    <Main/>
    </Provider>
    </div>
)
}
export default App;