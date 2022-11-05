import { precisionPrefix } from "d3";
import Image from "next/image";
import React, { useState } from "react";
import Container from "./container";
const size = 4

export default function Benefits(props) {
  const [xpos, setXpos] = useState(0)
  const { data } = props;
  const { colors } = props;
  const { matrix } = props;

  return (
    <>
      <Container className="mb-20 lg:gap-10 ">
      <div className="flex">
        {
          range(0, 50).map((n, ix) => {
            return <p className="mr-4">{ix+1}</p>
          })
        }
        
      </div>
      
      <svg viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg">
        {
          matrix.map((mx, i) => {
           return mx.map((val, ix) => {
                return (
                  <Rect key={ix} clr={colors[val - 1]} x={ix*size} y={i * size}>
                  </Rect>
                  )
            })
          })
        }
      </svg>

      </Container>
    </>
  );
}

function Rect(props) {
  return (
    <>
      <rect width={size} height={size} fill={props.clr} x={props.x} y={props.y}/>
    </>
  );
}

function range(start, end){
  var foo = []
  for (var i = start; i< end; i++){
    foo.push(i)
  }
  return foo;
}
