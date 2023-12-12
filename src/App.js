import logo from './logo.svg';
import { NavBar } from './components/HomePage/Navbar';
import AllRoutes from './routes/Allroutes';
import './App.css';

function App() {
  return (
    <div className="App">

      <NavBar />
      <AllRoutes />
      
    </div>
  );
}

export default App;
