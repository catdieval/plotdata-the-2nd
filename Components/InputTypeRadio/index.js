import { StyledInputRadio, RadioButton, StyledLabel } from "./styledInputTypeRadio";

export default function InputTypeRadio({
  nameString,
  valueString,
  onChange,
  idString,
  labelString,
}) {
  function isChecked() {
    nameString === valueString;
  }

  return (
    <RadioButton>
      <StyledInputRadio
        type="radio"
        name={nameString}
        value={valueString}
        id={idString}
        onChange={onChange}
        checked={isChecked()}
        required
      />
      <StyledLabel htmlFor={idString}>{labelString}</StyledLabel>
    </RadioButton>
  );
}

