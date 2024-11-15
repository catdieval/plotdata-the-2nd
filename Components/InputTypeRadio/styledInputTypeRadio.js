import styled from "styled-components";

export const RadioButton = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: row;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
`;

export const StyledInputRadio = styled.input.attrs({
  type: "radio",
})`
  transform: scale(1.4);
  margin: 8px;
`;

