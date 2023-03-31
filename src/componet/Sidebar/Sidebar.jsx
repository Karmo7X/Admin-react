
import { RiDashboardFill } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { AiFillShop ,AiFillCreditCard ,AiOutlineLogout ,AiOutlineSetting } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdNotificationsNone ,MdSettingsSystemDaydream } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
import { TbTruckDelivery } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import "./sidebar.css"
import { DarkModeContext } from '../../context/Darkcontext';
import { useContext } from "react";



const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
     <div className="top">
      <Link to="/" style={{textDecoration:'none'}}>
        <span className="logo">
         Admin
     </span>
      </Link>
     
     </div>
     <hr />
     <div className="center">
      <ul>
        <p className='title'>MAIN</p>
        <Link to="/" style={{textDecoration:'none'}}>
          <li>
          <RiDashboardFill className='icons'/>
          <span>Dashboard</span>
        </li>
        </Link>
      

        <p className='title'>LISTS</p>
        <Link to="/user" style={{textDecoration:'none'}}>
        <li>
          <FiUser className='icons'/>
          <span>Users</span>
        </li>
      </Link>
      <Link to="/products" style={{textDecoration:'none'}}>
        <li>
          <AiFillShop className='icons'/>
          <span>Products</span>
        </li>
        </Link>
        
        <li>
          <AiFillCreditCard className='icons'/>
          <span>Orders</span>
        </li>
        <li>
          <TbTruckDelivery className='icons'/>
          <span>Delivery</span>
        </li>

        <p className='title'>USEFUL</p>
        <li>
          <ImStatsDots className='icons'/>
          <span>Stats</span>
        </li>
        <li>
          <MdNotificationsNone className='icons'/>
          <span>Notifications</span>
        </li>
        <p className='title'>SERVICES</p>
        <li>
          <MdSettingsSystemDaydream className='icons'/>
          <span>System Health</span>
        </li>
        <li>
          <AiOutlineSetting className='icons'/>
          <span>Settings</span>
        </li>
        <p className='title'>USER</p>
        <Link to="/user/:userId" style={{textDecoration:'none'}}>
        <li>
          <CgProfile className='icons'/>
          <span>Profile</span>
        </li>
        </Link>
        
        <li>
          <AiOutlineLogout className='icons'/>
          <span>Logout</span>
        </li>
      </ul>
     </div>


     <div className="bottom">
     <div className="colorOption"  onClick={() => dispatch({ type: "LIGHT" })}></div>
     <div className="colorOption"  onClick={() => dispatch({ type: "DARK" })}></div>
    </div>
    </div>
  )
}

export default Sidebar
