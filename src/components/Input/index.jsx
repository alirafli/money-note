import classNames from "classnames";
import React from "react";

const STYLE =
  "bg-[#FEFEFE] rounded-full text-base placeholder:text-[#909090] placeholder:text-light w-full border border-[#BFBEBE] py-3.5 px-6";

const Input = ({
  type = "text",
  name,
  placeholder,
  className,
  margin = "mb-4",
  errorText,
  ...other
}) => {
  return (
    <div className={margin}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...other}
        className={classNames(className, STYLE)}
      />
      {errorText ? (
        <span className="text-xs text-red-600">{errorText}</span>
      ) : null}
    </div>
  );
};

export default Input;
