import { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// eslint-disable-next-line react/prop-types
export const Submenu = ({ subMenu }) => {
  const [checkCurrent, setCurrent] = useState(1);

  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {subMenu?.map((item, index) => (
        <li
          key={index}
          className={`item-submenu ${checkCurrent === item.id && "current"} `}
          onClick={() => setCurrent(item.id)}
        >
          <EastIcon className="icon-arrow" />
          <a href="" className=" ">
            {item?.title}
          </a>
          {item?.chilrend && (
            <ArrowForwardIosIcon className="hover-arrowforward" />
          )}
          {item?.chilrend && (
            <ul>
              {item?.chilrend?.map((item, index) => (
                <li key={index}>
                  <EastIcon className="icon-arrow" />
                  <a href="" className=" ">
                    {item?.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
};
