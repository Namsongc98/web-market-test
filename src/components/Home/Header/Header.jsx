import logo_header from "../../../../assets/img/logo/logo-header.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import iconRegister from "../../../../assets/icon/register.svg";
import iconSell from "../../../../assets/icon/header-sell.svg";
import iconPhone from "../../../../assets/icon/icon-phone-contact.svg";
import iconEmail from "../../../../assets/icon/icon-email-contact.svg";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../../Button";
import { Submenu } from "./submenu";
import { useState } from "react";
import { navHeader } from "../../../const";
export const Header = () => {
  const [checkCurrent, setCheckCurrent] = useState(1);
  const [toggleBurger, settoggleBurger] = useState(false);
  const [menuMobile, setMenuMobile] = useState();
  const [toggleChildren, setToggleChildren] = useState(false);

  const toggleMenu = (idItem) => {
    setMenuMobile(idItem);
    setToggleChildren(!toggleChildren);
  };
  return (
    <header className={toggleBurger ? "header header-sp" : "header "}>
      {/* nav-hader pc */}
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
                    {item?.children && (
                      <KeyboardArrowDownIcon fontSize="large" />
                    )}
                    {item?.children && (
                      <ul>
                        <Submenu subMenu={item?.children} />
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="header-right flex-center">
            <div className="wp-register">
              <ul className="list-register flex-center mr-2 ">
                <li className="item-register">
                  <img src={iconRegister} alt="" />
                </li>
                <li className="item-register">
                  <a>Register</a>
                </li>
                <li className="item-register">
                  <span className="">/</span>
                </li>
                <li className="item-register">
                  <a>Login</a>
                </li>
              </ul>
            </div>
            <Button
              btn={{
                icon: iconSell,
                text: "Sell Property",
              }}
            />
            <div className="burger" onClick={() => settoggleBurger(true)}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {/* nav-header sp */}

      <CloseIcon
        onClick={() => settoggleBurger(false)}
        className="close-mobile"
      />
      <div className="header-mobile">
        <div onClick={() => settoggleBurger(false)} className="bg-mobile"></div>
        <div className="header-mobile-box">
          <div className="header-mobile__logo">
            <img src={logo_header} alt="" width={197} height={48} />
          </div>
          <div className="header-mobile__body">
            <div className="mobile-login">
              <div className="display-flex align-center ">
                <img src={iconRegister} alt="" />
                <span>Login</span>
              </div>
            </div>
            <div className="mobile-nav">
              <ul>
                {navHeader?.map((item) => (
                  <li key={item.id} className="">
                    <div
                      className="item-menu"
                      onClick={() => toggleMenu(item.id)}
                    >
                      <a className="">{item.page}</a>
                      <KeyboardArrowDownIcon fontSize="large" />
                    </div>
                    <ul
                      className={`active-children ${
                        menuMobile === item.id && toggleChildren ? "open" : ""
                      } `}
                    >
                      {item.children?.map((item) => (
                        <li className="" key={item.id}>
                          <div className="sub-menu">
                            <a>{item.title}</a>
                            {item.children && (
                              <KeyboardArrowDownIcon fontSize="large" />
                            )}
                          </div>
                          {item.children && (
                            <ul>
                              {item.children?.map((item) => (
                                <li key={item.id} >
                                  <a href="">{item.title}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mobile-sell">
              <Button
                btn={{
                  icon: iconSell,
                  text: "Sell Property",
                }}
              />
            </div>
            <div className="mobile-contact">
              <h3>Contact</h3>
              <div className="display-flex wp-contact-phone">
                <img
                  src={iconPhone}
                  alt=""
                  width={40}
                  height={41}
                  className="mr-1"
                />
                <div className="content-contact">
                  <p>Call Us:</p>
                  <h5>(201) 555-0124</h5>
                </div>
              </div>
              <div className="display-flex ">
                <img
                  src={iconEmail}
                  alt=""
                  width={40}
                  height={41}
                  className="mr-1"
                />
                <div className="content-contact">
                  <p>Email:</p>
                  <h5>themesflat@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
