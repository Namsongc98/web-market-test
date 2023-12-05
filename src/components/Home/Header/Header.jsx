import logo_header from "../../../../assets/img/logo/logo-header.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import iconRegister from "../../../../assets/icon/register.svg";
import iconSell from "../../../../assets/icon/header-sell.svg";
import { Button } from "../../Button";
import { Submenu } from "./submenu";
import { useState } from "react";

export const Header = () => {
  const [checkCurrent] = useState(1);
  const menuHome = [
    { id: 1, title: "home page 1" },
    { id: 2, title: "home page 2" },
    { id: 3, title: "home page 3" },
    { id: 4, title: "home page 4" },
    { id: 5, title: "home page 5" },
  ];
  const menuProperty = [
    {
      id: 1,
      title: "Property List",
      chilrend: [
        { id: 1, title: "Property List" },
        { id: 2, title: "Property List Sidebar V1" },
        { id: 3, title: "Property List Sidebar V2" },
      ],
    },
    {
      id: 2,
      title: "Property Grid",
      chilrend: [
        { id: 1, title: "Property Grid" },
        { id: 2, title: "Property Grid Sidebar V1" },
        { id: 3, title: "Property Grid Sidebar V2" },
      ],
    },
    {
      id: 3,
      title: "Property Detail ",
      chilrend: [
        { id: 1, title: "Property Detail" },
        { id: 2, title: "Property Detail V1" },
        { id: 3, title: "Property Detail V2" },
      ],
    },
    {
      id: 4,
      title: "Property Map",
      chilrend: [
        { id: 1, title: "Property Half Map v1" },
        { id: 2, title: "Property Half Map V2" },
        { id: 3, title: "Property Half Map V3" },
      ],
    },
  ];

  const navHeader = [
    { id: 1, page: "Home", chilrend: menuHome },
    { id: 2, page: "Property", chilrend: menuProperty },
    { id: 3, page: "Page", chilrend: menuProperty },
    { id: 4, page: "Blog", chilrend: menuProperty },
    { id: 5, page: "Contact", chilrend: menuProperty },
  ];
  return (
    <header className="header ">
      <div className=" header-pc display-flex align-center justify-space-between ">
        <div className="display-flex justify-space-between align-center w-full gap-15">
          {/* Logo header */}
          <div>
            <img src={logo_header} alt="logo" width={197} height={48} />
          </div>
          {/* Navigation header */}
          <div className="nav-wapper flex-center">
            <nav className="nav-header">
              <ul className="nav-menu display-flex ">
                {navHeader?.map((item) => (
                  <li
                    key={item.id}
                    className={`list-menu display-flex align-center ${
                      checkCurrent === item.id && "current"
                    }`}
                  >
                    <a href="" className="mr-1 color-hover">
                      {item?.page}
                    </a>{" "}
                    <KeyboardArrowDownIcon fontSize="large" />
                    <ul>
                      <Submenu subMenu={item?.chilrend} />
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="herder-right flex-center">
            <div className="wp-register">
              <ul className="list-register flex-center mr-2 ">
                <li className="item-register">
                  <img src={iconRegister} alt="" />
                </li>
                <li className="item-register">Register</li>
                <li className="item-register">/</li>
                <li className="item-register">Login</li>
              </ul>
            </div>
            <Button
              btn={{
                icon: iconSell,
                text: "Sell Property",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
