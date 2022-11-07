import './App.css';
import Login from './Login';
import Register from './Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListPage from './ListPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/listPage" element={<ListPage />} />
          <Route path="/register" element={<Register></Register>} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
