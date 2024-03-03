import './App.css';
import { CheckList } from './Checklist';

function App() {
  return (
<div>
  <CheckList 
  data={[
    {id: 1, name: 'Tomek', role: 'Admin'},
    {id: 2, name: 'Natalia', role: 'Developer'},
  ]}
  id="id"
  primary="name"
  secondary="role"
  />
</div>
)
}
export default App;