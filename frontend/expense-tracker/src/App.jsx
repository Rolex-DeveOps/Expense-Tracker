import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  redirect,
} from "react-router-dom"
import toast from "react-hot-toast";


import Login from "./pages/Auth/login"
import SignUp from "./pages/Auth/SignUp"
import Home from "./pages/DashBoard/Home"
import Income from "./pages/DashBoard/Income"
import Expense from "./pages/DashBoard/Expense"
import UserProvider from "./context/userContext"
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <UserProvider>
   <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/signup" exact element={<SignUp/>}/>
          <Route path="/dashboard" exact element={<Home/>}/>
          <Route path="/income" exact element={<Income/>}/>
          <Route path="/expense" exact element={<Expense/>}/>
        </Routes>
      </Router>
   </div>

   <Toaster
   toastOptions={{
    className:"",
    style:{
      fontSize:"13px"
    },
   }}
   />


   </UserProvider>
  );
};

export default App


const Root = () =>{

  // Check if token exists in localStorage
    const isAuthenticated = !!localStorage.getItem("token");

    //Redirect to dashboard if authenticated or go to login
    return isAuthenticated ? (
      <Navigate to="/dashboard"/>
        ):(
            <Navigate to="/login"/>
        );

};