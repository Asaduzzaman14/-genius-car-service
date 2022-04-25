import { Routes, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import RequirAuth from './Pages/Home/RequirAuth/RequirAuth';
import LogIn from './Pages/Login/LogIn';
import ManageServices from './Pages/ManageServices/ManageServices';
import Order from './Pages/Order/Order';
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

        <Route path={'/checkout/:servceId'} element={
          <RequirAuth>
            <Checkout></Checkout>
          </RequirAuth>
        }></Route>
        <Route path={'/addservice'} element={
          <RequirAuth>
            <AddService></AddService>
          </RequirAuth>
        }></Route>
        <Route path={'/manage'} element={
          <RequirAuth>
            <ManageServices></ManageServices>
          </RequirAuth>
        }></Route>
        <Route path={'/orders'} element={
          <RequirAuth>
            <Order></Order>
          </RequirAuth>
        }></Route>


        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div >
  );
}

export default App;
