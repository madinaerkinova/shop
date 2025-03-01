import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Home } from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import { DetailPage } from "./pages/detail-page/deatil-page";
import { ShoppingPage } from "./pages/shopping/shopping-page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/shop/:id" element={<DetailPage />} />
        <Route path="/shop" element={<ShoppingPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
