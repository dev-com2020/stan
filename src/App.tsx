import './App.css';
import { CheckList } from './Checklist';

function App() {
  return (
    <div>
      <CheckList
        data={[
          { id: 1, name: 'Tomek', role: 'Manager' },
          { id: 2, name: 'Natalia', role: 'Developer' },
          { id: 3, name: 'Sara', role: 'Developer' },
          { id: 4, name: 'Władysław', role: 'UX' },
          { id: 5, name: 'Kajetan', role: 'QA' },
        ]}
        id="id"
        primary="name"
        secondary="role"
        style={{
          width: '300px',
          maxHeight: '380px',
          overflowY: 'auto'
        }}
      />
    </div>
  )
}
export default App;