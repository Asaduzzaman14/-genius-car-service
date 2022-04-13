import { Routes, Route } from 'react-router';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import LogIn from './Pages/Login/LogIn';
import Register from './Pages/Register/Register';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:servceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
