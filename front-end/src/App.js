import logo from './logo.svg';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Task from './Pages/Task';

import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
  <AllRoutes/>

    </div>
  );
}

export default App;
