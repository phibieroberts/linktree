import './App.css';
import Profile from "./Profile"
import Contact from './Contact';
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className='App'>
    <Router>
    <Routes>
      <Route path='/' element={<Profile />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
