import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ style, label, className, ...props }) => {

  const primaryStyle = "bg-gray-800 hover:bg-gray-900 px-8 py-2 text-gray-50 text-sm";
  const secondaryStyle = "bg-gray-50 border border-gray-800 hover:bg-gray-100 px-8 py-2 text-gray-800 text-sm"
  const linkStyle = "text-gray-600 hover:text-gray-900 hover:underline font-semibold text-sm px-1"

  const getStyle = () => {
    switch (style) {
      case "primary":
        return primaryStyle
      case "secondary":
        return secondaryStyle
      case "link":
        return linkStyle
      default:
        break;
    }
  }

  return (
    <button
      type="button"
      className={[getStyle(), className].filter(Boolean).join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  style: "primary",
  label: "Button",
  onClick: undefined,
};
