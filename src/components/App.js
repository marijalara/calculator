import React from "react";
import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";
import CalcProvider from "../context/CalcContext";

const btnValues=[
  ["AC", "+/-","%","÷"], 
  ["7", "8","9","x"],
  ["4","5","6","-"],
  ["1","2","3","+"],
  ["0",".","="],
]
            
const App=() => {
  return(
    <CalcProvider>
    <Wrapper>
      <Screen />
      <ButtonBox>
        {btnValues.flat().map((btn, index) => (
            <Button 
              value={btn}
              key={index}
            />
        ))}
      </ButtonBox>
    </Wrapper>
    </CalcProvider>
  )
}
export default App;
