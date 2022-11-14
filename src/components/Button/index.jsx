import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import Text from "../Text";

const Button = ({
  type,
  className,
  isLink,
  to,
  onClick,
  state = {},
  children,
}) => {
  const classname = classNames(
    "bg-[#7098E0] text-white text-lg font-normal py-2 px-7 rounded-full hover:bg-[#668ACC]",
    {
      "bg-[#FFFFFF] border border-[#7098E0] text-[#7098E0] text-center hover:bg-[#E9F2FF]":
        type === "light",
    },
    className
  );
  return (
    <>
      {isLink ? (
        <Link to={to} className={classname} state={state}>
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type="submit"
          name="submit"
          className={classNames(
            "bg-[#7098E0] text-white text-lg font-normal py-2 px-7 rounded-full hover:bg-[#668ACC]",
            {
              "bg-[#FFFFFF] border border-[#7098E0] text-[#7098E0] text-center hover:bg-[#E9F2FF]":
                type === "light",
            },
            className
          )}
        >
          <div className={classNames("justify-center")}>
            <Text variant="p2">{children}</Text>
          </div>
        </button>
      )}
    </>
  );
};

export default Button;
