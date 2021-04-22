import React, { useEffect, useState } from "react";
import Styled from "styled-components";

import { Forms } from "./Components/Form";
import { Results } from "./Components/Results";

const StyledWrapText = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const App = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <StyledWrapText>
      <h1>Escribe un texto</h1>
      <Forms func={setState} />
      {state.length !== 0 ? <Results string={state} /> : null}
    </StyledWrapText>
  );
};
