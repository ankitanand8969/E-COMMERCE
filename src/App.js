import Home from './pages/Home/Home';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import SignIn from './pages/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import Payment from './pages/Payment/Payment';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

function App() {
  return (
   
    <div className="App">
      <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Cart' element={<Cart/>}/>
       <Route path='/signIn' element={<SignIn/>}/>
       <Route path='/payment' element={<Payment/>}/>
        </Routes>
        <NotificationContainer/>
    </div>
  );
}

export default App;
