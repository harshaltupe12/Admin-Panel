import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Login from "./pages/login/Login.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import {BrowserRouter, Routes, Route}from "react-router-dom";
import { userInputs, productInputs } from "./formSource.js";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";

function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New inputs={userInputs} title = "Add new user"/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New inputs={productInputs} title = "Add new Product"/>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
