import React from "react";
import clsx from "clsx";

const Button = ({ className, children, reference }) => {
  return (
    // <a href={reference ? reference : "/"}>
    <button
      className={clsx(
        "px-4 py-2 rounded-sm text-white w-full text-sm font-semibold",
        className
      )}
    >
      {children}
    </button>
    // </a>
  );
};

export default Button;
