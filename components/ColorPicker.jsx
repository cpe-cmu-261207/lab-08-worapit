import React, { useContext } from "react";
import { PainterContext } from "../contexts/PainterContext";

export default function ColorPicker(props) {
  const color = props.color;

  const { selColor, setSelColor } = useContext(PainterContext);
  //selColor มาจาก Provider
  return (
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        borderStyle: "solid",

        //if this color is selected, show this
        //borderColor: "magenta",
        //borderWidth: "7px",

        //if this color is not selected, show this
        //borderColor: "black",
        //borderWidth: "2px",
        borderColor: selColor === color ? "magenta" : "black",
        borderWidth: selColor === color ? "7px" : "2px",
      }}
      onClick={() => {
        setSelColor(color);
      }}
    />
  );
}
