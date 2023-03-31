
import './App.css';
import { BrowserRouter , Routes , Route
 } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import Lists from './list/Lists';
import Single from './single/Single';
import New from './new/New';
import { productInputs, userInputs } from './Formsource';
import "./style/dark.css"
import { useContext } from 'react';
import { DarkModeContext } from './context/Darkcontext';




function App() {
 
  const{darkMode}=useContext(DarkModeContext);
  return (
    <>
    <div className={darkMode ? "dark" : "app"} >
<BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="user">
            <Route index  element={<Lists/>}/>
            <Route path=':userId' element={<Single/>}/>
            <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>

          </Route>
          <Route path="products">
              <Route index element={<Lists />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>

        
      </Routes>
      </BrowserRouter>
    </div>
      
    </>
  );
}

export default App;
