import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {LoginContext} from './context/index';
import Login from "./page/Login";
import HomePage from './page/HomePage';

function App() {

    let [isLogin, setIsLogin] = useState(false);

  return (
     <LoginContext.Provider value={{
            isLogin,
            setIsLogin
        }}>
    <BrowserRouter>
        {isLogin 
            ? <Routes>
                <Route 
                    path='/' 
                    element={ <HomePage /> }
                />
              </Routes>
            : <Routes>
                <Route path='/' element={<Navigate replace to='/login' />} />
                <Route 
                    path='/login' 
                    element={
                        <Login />
                    } 
                />
                 


              </Routes>
        }
    </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;