import {StyledInputTypeSubmit} from "./styledInputTypeSubmit"

export default function InputTypeSubmit({
  valueString,
  onClick,
  disabled,
  $submitOnly
}) {
  return (
    <StyledInputTypeSubmit
      value={valueString}
      onClick={onClick}
      disabled={disabled}
      $submitOnly={$submitOnly}
      />
  );
};
