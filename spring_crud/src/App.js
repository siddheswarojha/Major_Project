
import './App.css';
import Navbar from './components/Pages/JS/Navbar';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import AllUser from './components/Pages/JS/Admin/AllUser';
import EditUser from './components/Pages/JS/EditUser';
import RegisterUser from './components/Pages/JS/RegisterUser';
import LoginUser from './components/Pages/JS/LoginUser';
import AdminPassword from './components/Pages/JS/AdminPassword';
import WelcomeComplaint from './components/Pages/JS/WelcomeComplaint';
import ComplaintRegister from './components/Pages/JS/ComplaintRegister';
import AdminNavbar from './components/Pages/JS/Admin/AdminNavbar';
import AllComplaint from './components/Pages/JS/Admin/AllComplaint'
import ContactUs from './components/Pages/JS/ContactUs';
// import GLogin from './components/Pages/JS/GLogin';


function App() {

  
  return (
    <>

      <BrowserRouter>

        <Routes>  
          <Route exact path='/' element={< Navbar />} />  
          <Route exact path='/registerUser' element={< RegisterUser />} />          
          <Route exact path='/loginUser' element={< LoginUser />} />
          <Route exact path='/contactUs' element={< ContactUs />} />

          <Route exact path='/admin' element={< AdminNavbar />} />          
          <Route exact path='/allUser' element={< AllUser />} />   
          <Route exact path='/password' element={< AdminPassword />} />   
          <Route exact path='/complaint' element={< WelcomeComplaint />} />   
          <Route exact path='/registerComplaint' element={< ComplaintRegister  />} />   
          <Route exact path='/allComplaint' element={< AllComplaint />} />   
          <Route exact path='/editUser/:id' element={<EditUser />} />
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
