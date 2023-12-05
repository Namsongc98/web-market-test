import { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// eslint-disable-next-line react/prop-types
export const Submenu = ({ subMenu }) => {
  const [checkCurrent, setCurrent] = useState(1);

  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {subMenu?.map((item) => (
        <li
          key={item?.id}
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
         
        </li>
      ))}
    </>
  );
};
