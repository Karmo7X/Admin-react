import React from 'react'
import { MdKeyboardArrowUp, MdOutlineMonetizationOn ,MdPersonOutline,MdOutlineShoppingCart } from "react-icons/md"
import "./widgets.css"
const Widgets = ( {type} ) => {

    let data;
  // temporary
    const amount = 100;
    const diff=20;
    switch(type)
    {
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:  <MdPersonOutline className='icon'   style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}/>,
            };
            break;
            
        case "order":
                data={
                    title:"ORDER",
                    isMoney:false,
                    link:"View all Order",
                    icon:  <MdOutlineShoppingCart className='icon' style={{
                      backgroundColor: "rgba(218, 165, 32, 0.2)",
                      color: "goldenrod",
                    }}/>,
                };
                break;
                
                case "earning":
                    data={
                        title:"ERARNUNGS",
                        isMoney:true,
                        link:"View net earning",
                        icon:  <MdOutlineMonetizationOn className='icon'   style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}/>,
                    };
                    break;  
                    

                    case "balance":
                        data={
                            title:"Balance",
                            isMoney:true,
                            link:"See datails",
                            icon:  <MdOutlineMonetizationOn className='icon'style={{
                              backgroundColor: "rgba(128, 0, 128, 0.2)",
                              color: "purple",
                            }}/>,
                        };
                        break; 



                        default:
                            break; 
                                 
                    
    }



  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"}{amount}</span>
        <span className='link'>{data.link}</span>

        </div>
      <div className="right">
        <div className="percentage positive">
            <MdKeyboardArrowUp/> 
            {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets
