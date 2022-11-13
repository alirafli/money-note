import React from "react";
import classNames from "classnames/bind";

const VARIANT = {
  h1: "text-3xl md:text-4xl lg:text-5xl",
  h2: "text-xl md:text-2xl lg:text-3xl",
  p1: "text-base md:text-xl lg:text-2xl",
  p2: "text-sm md:text-base lg:text-xl",
};

const WEIGHT = {
  bold: "font-bold",
  semiBold: "font-semibold",
  normal: "font-normal",
  light: "font-light",
};

const Text = ({ variant = "p1", weight = "normal", className, children }) => {
  return (
    <p className={classNames(className, VARIANT[variant], WEIGHT[weight])}>
      {children}
    </p>
  );
};

export default Text;
