import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import CoinDetails from './component/CoinDetails';
import Coins from './component/Coins';
import Exchange from './component/Exchange';


function App() {
  return (
    <>
   
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/coins' element={<Coins/>} />
      <Route path='/exchange' element={<Exchange/>} />
      <Route path='/coin/:id' element={<CoinDetails/>} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
