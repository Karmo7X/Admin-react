import React from 'react'
import Charts from '../componet/chart/Charts'
import Navbar from '../componet/Navbar/Navbar'
import Sidebar from '../componet/Sidebar/Sidebar'
import Tables from '../componet/table/Tables'
import avatar from "../image/profile.jpg"
import "./single.css"
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="topsingle">
          <div className="singleleft">
            <div className="editButton">Edit</div>
            <h1 className='title'>Information</h1>
            <div className="item">
              <img src={avatar} alt="" className='itemImg'/>
              <div className="details">
                <h1 className='itemTitle'>
                  Kareem Azam
                </h1>
                <div className="detailItem">
                  <span className='itemkey'>
                    Email:
                  </span>
                  <span className='itemvalue'>
                    Karmo7x@gmail.com
                  </span>
                </div>
                <div className="detailItem">
                  <span className='itemkey'>
                    Phone:
                  </span>
                  <span className='itemvalue'>
                   01034566241
                  </span>
                </div>
                <div className="detailItem">
                  <span className='itemkey'>
                    Address:
                  </span>
                  <span className='itemvalue'>
                    Cairo
                  </span>
                </div>
                <div className="detailItem">
                  <span className='itemkey'>
                    Country:
                  </span>
                  <span className='itemvalue'>
                    Egypt
                  </span>
                </div>
             
              </div>
            </div>
          </div>
          <div className="right">
            <Charts aspect={3/1} title="User Spending(Last 6 Months)"/>

          </div>
          
          
        </div><div className="singlebottom">
            <h1 className='title'>Last Transactions</h1>
           <Tables/>
          </div>
      </div>
      
      
    </div>
  )
}

export default Single
