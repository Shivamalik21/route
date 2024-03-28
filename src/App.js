
import './App.css';

import Header from './component/subcomponet/Header';
import Footer from './component/subcomponet/Footer';
import Home from './component/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Header/>
  
  <Outlet/>
   <Footer/>
    </div>
  );
}

export default App;
