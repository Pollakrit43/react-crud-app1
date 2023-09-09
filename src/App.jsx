import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/User/Users";
import UserCreate from "./UserCreate";
import UserUpdate from "./UserUpdate";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="create" element={<UserCreate />} />
        <Route path="update/:id" element={<UserUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
