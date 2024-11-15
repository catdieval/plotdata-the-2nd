import { StyledInputText } from "./styledInputTypeText";

export default function InputTypeText({
  placeholderString,
  onChange,
  idString,
  nameString,
}) {
  return (
    <>
      <label htmlFor={idString}>{idString}:</label>
      <StyledInputText
        name={nameString}
        type="text"
        id={idString}
        placeholder={placeholderString}
        onChange={onChange}
        required
      />
    </>
  );
}
