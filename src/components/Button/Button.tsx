import React from "react";
import { button } from "./Button.module.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className={button}>{props.label}</button>;
};

export default Button;
