import React from "react";
import Slider from "react-slick";
import { FaSearch, FaShoppingCart, FaLeaf } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { product } = useSelector((store) => store.product);
  console.log(product);
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container">
          <div className="flex justify-between items-center py-4 px-6">
            <a href="/" className="flex  items-center w-auto">
              <FaLeaf className="text-primary text-3xl" />
              <span className="text-xl font-bold text-primary ml-2">
                GREENSHOP
              </span>
            </a>
            <nav className="flex items-center gap-10 w-auto">
              <Link to={"/"} className="text-gray-800 hover:text-primary">
                Home
              </Link>
              <Link to={"/shop"} className="text-gray-800 hover:text-primary">
                Shop
              </Link>
              <a href="#" className="text-gray-800 hover:text-primary">
                Plant Care
              </a>
              <a href="#" className="text-gray-800 hover:text-primary">
                Blogs
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-800 hover:text-primary">
                <FaSearch />
              </button>
              <Link to={"/shop"} className="text-gray-800 hover:text-primary">
                <FaShoppingCart />
              </Link>
              <button className="bg-pritext-primary text-white px-4 py-2 rounded">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
