import './App.css';
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Home from './Pages/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import AuthProvider from './components/Context/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';

function App() {
  return (
    <div className="App">
  
    <AuthProvider> 
      <Router>
       <Routes>
       {/* <Route path={`/dashboard/addEvent`} element={<AddEvent/>}></Route>
       <Route path={`/dashboard/bookingevents`} element={<BookingEvents/>}></Route>
       <Route path={`/dashboard/makeadmin`} element={<MakeAdmin/>}></Route>
       <Route path={`/dashboard/manageallevents`} element={<MangeAllEvents/>}></Route>
       <Route path={`/dashboard/manageallbookings`} element={<ManageAllBookings/>}></Route>
       <Route path={`/dashboard/payment`} element={<Payment/>}></Route> */}
         <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
         {/* <Route path="/about" element={<About/>}></Route> */}
         {/* <Route path="/booking" element={<Booking/>}></Route> */} 
    <Route path="/register" element={<Register/>}></Route> 
         {/* <Route path="/dashboard" element={<Dashboard/>}></Route> */}
         {/* <Route path="/gallery" element={<Photos/>}></Route> */}
         {/* <Route exact path="*" element={<NotFound/>}></Route> */}
      
         </Routes> 
   </Router>     
     </AuthProvider> 

    
   </div>
  );
}

export default App;
