import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { MdMoreVert , MdKeyboardArrowDown ,MdKeyboardArrowUp} from 'react-icons/md';
import './featured.css'
const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>
            Total Revenue
        </h1>
       <MdMoreVert fontSize="small"/>
    
      </div>

    <div className="bottom">
        <div className="featuredChart">
         <CircularProgressbar value={30} text={"30%"} strokeWidth={5}/>
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>$450</p>
        <p className="desc">
            previous transaction processing .last payments may not be icluded.
        </p>


        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              Target
            </div>
            <div className="itemResult">
              <MdKeyboardArrowDown />
               <div className="resultAmount negative">
              $12.4k
            </div>
            </div>
           
          </div>
          <div className="item">
            <div className="itemTitle">
              Last Week
            </div>
            <div className="itemResult">
              <MdKeyboardArrowUp />
               <div className="resultAmount positive">
              $12.4k
            </div>
            </div>
           
          </div>
          <div className="item">
            <div className="itemTitle">
              Last Month
            </div>
            <div className="itemResult">
              <MdKeyboardArrowUp />
               <div className="resultAmount positive">
              $12.4k
            </div>
            </div>
           
          </div>
        </div>
    </div>
      
    </div>
  )
}

export default Featured
