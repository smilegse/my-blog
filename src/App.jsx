import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import ByCategoryPage from "./pages/ByCategoryPage";
function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/byCategory/:categoryID" element={<ByCategoryPage/>} />
            <Route path="/details/:postId" element={<DetailsPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
