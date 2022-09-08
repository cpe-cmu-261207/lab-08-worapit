import React, { useContext } from "react";
import { PainterContext } from "../contexts/PainterContext";
//Cell คือช่องๆหนึ่ง
export default function Cell(props) {
  const { xPos, yPos } = props;
  //ดึงตัวแปรมาจาก array 2 มิติ
  const { pixels, paint } = useContext(PainterContext);

  return (
    <div
      style={{
        width: "40px",
        height: "40px",

        //please replace color with painted color from position xPos, yPos
        //pixels , xPos , yPos
        backgroundColor: pixels[yPos][xPos],

        borderWidth: "1px",
        borderStyle: "solid",
        margin: "0px",
      }}
      onClick={() => {
        //when clicked, set pixels data at position xPos, yPos with selected color
        //you code here
        paint(xPos, yPos);
      }}
    ></div>
  );
}
