import React from 'react'
import Charts from '../componet/chart/Charts'
import Featured from '../componet/featured/Featured'
import Navbar from '../componet/Navbar/Navbar'
import Sidebar from '../componet/Sidebar/Sidebar'
import Tables from '../componet/table/Tables'
import Widgets from '../widgets/Widgets'
import "./home.css"
const Home = () => {
  return (
    <div className='home'>
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>

        <div className="charts">
          <Featured/>
          <Charts title="Last 6 Months(Revenue)" aspect={2/1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
          </div>
           <Tables/>
        </div>
       </div>
    </div>
  )
}

export default Home
