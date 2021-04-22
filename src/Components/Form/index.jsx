import React from "react";
import { TextArea, Form } from "semantic-ui-react";
import Styled from "styled-components";

const StyledForm = Styled(Form)`
    width: 40%;
`;

export const Forms = ({ func }) => {
  return (
    <StyledForm>
      <TextArea id="text" name="text" onChange={(e) => func(e.target.value)} />
    </StyledForm>
  );
};
