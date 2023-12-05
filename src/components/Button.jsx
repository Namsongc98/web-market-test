import React from "react";
import PropTypes from "prop-types";

export const Button = ({ btn }) => {
  return (
    <div className="header-btn ">
      <img src={btn.icon} alt="" />
      <span> {btn.text}</span>
    </div>
  );
};

Button.propTypes = {
  btn: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
