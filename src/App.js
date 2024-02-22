import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Cards from "./components/Cards";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";

const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={{ login, userName, setLogin, setUserName }}>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Appstate.Provider>
  );
}

export default App;
export { Appstate };
