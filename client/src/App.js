import logo from './logo.svg';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/login' exact Component={Login}></Route>
          <Route path='/register' exact Component={Register}></Route>
          <Route path='/bookingCar' exact Component={BookingCar}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
