import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Login from "./pages/login/Login.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import {BrowserRouter, Routes, Route, Navigate}from "react-router-dom";
import { userInputs, productInputs } from "./formSource.js";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";
import { AuthContext } from "./context/AuthContext.js";

function App() {
  const {darkMode} = useContext(DarkModeContext)
  const{currentUser} = useContext(AuthContext)
  const RequireAuth = ({children})=>{
    return currentUser ? children : <Navigate to="/login"/>

  }
  console.log(currentUser);
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="login" element={<Login/>}/>
          <Route index element={<RequireAuth><Home/></RequireAuth>}/>
          <Route path="users">
            <Route index element={<RequireAuth><List/></RequireAuth>}/>
            <Route path=":userId" element={<RequireAuth><Single/></RequireAuth>}/>
            <Route path="new" element={<RequireAuth><New inputs={userInputs} title = "Add new user"/></RequireAuth>}/>
          </Route>
          <Route path="products">
            <Route index element={<RequireAuth><List/></RequireAuth>}/>
            <Route path=":productId" element={<RequireAuth><Single/></RequireAuth>}/>
            <Route path="new" element={<RequireAuth><New inputs={productInputs} title = "Add new Product"/></RequireAuth>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
