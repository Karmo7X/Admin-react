import {React ,useState} from 'react'
import Navbar from '../componet/Navbar/Navbar'
import Sidebar from '../componet/Sidebar/Sidebar'
import { MdDriveFolderUpload } from "react-icons/md"
import "./new.css"
const New = ({inputs,title}) => {
  const [file, setFile] = useState("");
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="newtop">
          <h1>{title}</h1>
        </div>
        <div className="newbottom">
          <div className="newleft">
            <img src={file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="newright">
            <form action="">
            <div className="formInput">
                <label htmlFor='file' >
                  Image :<MdDriveFolderUpload className='icon'/></label>
                <input type="file" id="file" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])} />
              </div>
              
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              
             
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default New
