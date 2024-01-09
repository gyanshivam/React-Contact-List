import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = []; //Array to store data of api
    const promise = async () => {
      //Api to store the data
      await fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json()) //Resolving the promiss
        .then((json) => {
          //Resolving the promis and sroring data into array
          json.map((contact) => {
            data.push({
              id: contact.id,
              name: contact.name,
              number: contact.phone,
              email: contact.email,
            });
          });
        });
      dispatch({ type: "FETCH_CONTACTS", payload: data });
    };
    promise();
  }, []);

  return (
    <div className="App">
      {/* Toast library for Notifications  */}
      <ToastContainer />
      {/* NavBar Component rendering  */}
      <Navbar />

      {/* all Routers  */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddContact />}></Route>
        <Route path="/edit/:id" element={<EditContact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
