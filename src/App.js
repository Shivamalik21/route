
import { Outlet } from 'react-router-dom';
import './App.css';


import Home from './component/Home';
import Footer from './component/subcomponet/Footer';
import Header from './component/subcomponet/Header';


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
