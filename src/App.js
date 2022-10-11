import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./components/UserList/UserList";
import Header from "./components/Header/Header";
import Homepage from "./components/pages/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import NotFound from "./components/pages/NotFound";
import UserDetail from "./components/UserDetails/UserDetail";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to={"/404"} />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
