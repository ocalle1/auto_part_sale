import './App.css';
import './css/Inventory.css';
import {Routes, Route} from 'react-router-dom';
import Header from './Header';
import Images from './images_js/Images';
import ReactRouter from './route_pages/ReactRouter';
import Inventory from './route_pages/Inventory';

function App() {
  return <>

    {/* <div> */}
      {/* <Header /> */}
    {/* <Images /> */}
    <ReactRouter />
    <Routes>
    <Route path='/' element={<Header />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>

    {/* </div> */}
  </> 
}

export default App;
