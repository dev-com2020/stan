import { Main } from "./Main"
import { Header } from "./Header";
import { AppProvider } from "./AppContext";
import './App.css';


function App() {
return (
  <div>
    <AppProvider>
    <Header/>
    <Main/>
    </AppProvider>
    </div>
)
}
export default App;