import React from 'react'
import {Route, Routes} from 'react-router-dom'
import SignUp from '../Signup/SignUp'
import Homepage from '../Homepage/Homepage'
import Loginform from '../Login/Loginform'
import Aboutus from '../About/Aboutus'
import Reviews from '../Reviews/Reviews'
import Contacts from '../Contacts/Contacts'
import AirServices from '../AirServices/AirServices'
import SeaServices from '../SeaService/SeaServices'
import GroundServices from '../GroundService/GroundServices'
import GetQ from '../GetQ/GetQ'
import Profile from '../Profile/Profile'
import Payment from '../Payment/Payment'
import ForgotPassword from '../ForgotPassword/Forgotpassword'
import Order from '../Order/Order'
import Policy from '../Footer/Policy'
import Dashboard from '../Admin/Dashboard/Dashboard'
import Sidebar from '../Admin/Sidebar/Sidebar'
import Navbar from '../Admin/Navbar/ANavbar'
import OrderManagement from '../Admin/OrderManagement/OrderManagement'
import UserDetails from '../Admin/Userdetails/UserDetails'
import Tracking from '../Tracking/Tracking'
import Warehouse from '../Admin/Warehouse/Warehouse'
import NotiBell from '../Admin/Contact/NotiBell'
import Report from '../Admin/Sidebar/Report' // Updated path

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Loginform/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Homepage' element={<Homepage/>}/>
        <Route path='/Aboutus' element={<Aboutus/> }/>
        <Route path='/Review' element={<Reviews/> }/>
        <Route path='/Contacts' element={<Contacts/> }/>
        <Route path='/AirServices' element={<AirServices/> }/>
        <Route path='/SeaServices' element={<SeaServices/> }/>
        <Route path='/GroundServices' element={<GroundServices/> }/>
        <Route path='/GetQ' element={<GetQ/> }/>
        <Route path='/Payment' element={<Payment/> }/>
        <Route path='/profile' element={<Profile/> }/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/Policy' element={<Policy/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Sidebar' element={<Sidebar/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/Orders' element={<OrderManagement/>}/>
        <Route path='/userdetails' element={<UserDetails/>}/>
        <Route path='/Track' element={<Tracking/>}/>
        <Route path='/warehouse' element={<Warehouse/>}/>
        <Route path='/notibell' element={<NotiBell/>}/>
        <Route path='/Report' element={<Report/>}/> {/* Added Route for Report */}
    </Routes>
  )
}

export default Routing;
