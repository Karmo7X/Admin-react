import React from 'react'
import Datatable from '../componet/datatable/Datatable'
import Navbar from '../componet/Navbar/Navbar'
import Sidebar from '../componet/Sidebar/Sidebar'
import "./list.css"
const Lists = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <Datatable/>
      </div>
      
    </div>
  )
}

export default Lists
