import React from "react";
import { Label } from "semantic-ui-react";
import { charactersWithSpace, characters, words } from "./../Functions";
import Styled from "styled-components";

const StyledWrapResults = Styled.div`
    margin-top:30px;
`;

export const Results = ({ string }) => {
  return (
    <StyledWrapResults>
      <Label color="black" size="large">
        numero de caracteres (contando espacios en blanco y puntuacion):{" "}
        {charactersWithSpace(string)}
      </Label>
      <Label color="black" size="large">
        numero de caracteres: {characters(string)}
      </Label>
      <Label color="black" size="large">
        numero de palabras: {words(string)}
      </Label>
    </StyledWrapResults>
  );
};
