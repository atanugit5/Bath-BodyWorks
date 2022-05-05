import React from "react";
import AnnounceBar from "./AnnounceBar";
import PickUpImg from "../Images/PickUpImg.PNG";
import Example from "./CategoriesNav";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/divAcc.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* AnnounceBar */}
      <AnnounceBar />

      {/* pickUp  Start*/}
      <div
        className="h-[40px] flex flex-1 justify-end"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <img className="mr-10" src={PickUpImg} alt="" />
      </div>
      {/* PickUp end */}

      {/* Main Navbar Start */}
      <div
        className="h-[fit-content]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <div className="h-[80px] flex">
          <div className="m-auto">
            <Link to={"/"}>
              <img
                src="https://www.bathandbodyworks.com/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw255cc1f3/images/svg-icons/Logos-main.svg"
                alt="logo"
                className="h-[35px] mx-[500px]"
              />
            </Link>
          </div>
          <div className="w-[600px] flex items-center">
            <div
              className="border border-black h-[35px] w-[250px] ml-3"
              style={{ borderRight: "none" }}
            >
              <input
                onClick={() => navigate("/search")}
                className=" p-1 w-full text-black rounded-[2px] outline-none"
                type="text"
                placeholder="Search by fragrance or product..."
              />
            </div>
            <div
              className="w-[50px] h-[35px] border border-black rounded-[2px] outline-none"
              style={{ borderLeft: "none" }}
            >
              <img
                className="cursor-pointer p-2"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw729fd72d/images/svg-icons/UI-Search-v2.svg?yocs=o_s_"
                alt=""
              />
            </div>
            <div className="w-[50px] h-[45px] rounded-full divAcc">
              <img
                className="w-[50px] h-[45px] cursor-pointer"
                id="accImg"
                src="https://www.bathandbodyworks.com/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwc847d762/images/svg-icons/UI-MyAccount.svg"
                alt="account"
              />
              <div className="divAccHover">
                <Link to={"/account"}>
                  <div className="h-[fit-content]  mt-2 w-fit">
                    <h1 className="leading-8 px-2 text-[13px] text-[#666]">
                      Sign In or Sign Up
                    </h1>
                  </div>
                </Link>
                <Link to={"/cart"}>
                  <div className="h-[fit-content] w-fit">
                    <h1 className="leading-8 px-2 text-[13px] text-[#666]">
                      Order Tracking
                    </h1>
                  </div>
                </Link>
                <Link to={"/cart"}>
                  <div className="h-[fit-content] w-fit">
                    <h1 className="leading-8 px-2 text-[13px] text-[#666]">
                      My Auto Refresh
                    </h1>
                  </div>
                </Link>
                <Link to={"/cart"}>
                  {" "}
                  <div className="h-[fit-content] w-fit">
                    <h1 className="leading-8 px-2 text-[13px] text-[#666]">
                      My Love-It List
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
              
            <div className="w-[50px] h-[45px] rounded-full">
              <Link to={"/cart"}>
                <img
                  className="w-[30px] h-[30px] m-1.5 cursor-pointer"
                  src="https://www.bathandbodyworks.com/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1615459561027/images/svg-icons/UI-AddToBag.svg"
                  alt="cartlogo"
                />
              </Link>
            </div>
          </div>
        </div>
        <Example />
      </div>
      {/* Main Ends Navbar Here */}
    </div>
  );
};

export default NavBar;
