import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/homePage/Home";
import HotelPage from "./pages/hotelPage/HotelPage";
import List from "./pages/hotelList/List";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<HotelPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
