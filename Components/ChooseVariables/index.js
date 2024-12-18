import Container from "../Container";
import Paragraph from "../Paragraph";
import DropDownMenu from "../DropDownMenu";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import Button from "../Button";
import WarningMessage from "../WarningMessage";

export default function ChooseVariables({
  onDisableNextButton, 
  onNext, 
  onBack,
  keyNames,
  onAssignVariables,
  onXChange,
  onYChange,
  xKey,
  yKey,
  xVariable,
  yVariable,
  currentStep,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  const hasNotCompletedStep3 = ((xKey.length === 0 || yKey.length === 0) ||
  ((xVariable.length < 1) && (yVariable.length < 1))); 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container $centered="center" $margin_bottom> 
          <Paragraph>Variable for the x-axis:</Paragraph>
          <DropDownMenu
            idString="x:"
            onChange={onXChange}
            arrayOfOptions={keyNames}
          />
          {(xKey.length != 0) && (
            <Paragraph>x-axis variable: <b>{xKey}</b></Paragraph>
          )}
          <br />
          <br />
          <Paragraph>Variable for the y-axis:</Paragraph>
          <DropDownMenu
            idString="y:"
            onChange={onYChange}
            arrayOfOptions={keyNames}
          />
          {(yKey.length != 0) && (
            <Paragraph>y-axis variable: <b>{yKey}</b></Paragraph>
          )}
          <br/>
          {(xKey === yKey && xKey !== "") && (
            <Container $centered="center">
              <WarningMessage 
                buttonMessage="OK!"
                message="Are you sure you want to use the same variable for x as for y? It would give a meaningless plot!"
             />
            </Container>
          )}
          <ButtonContainer>
            <InputTypeSubmit
              valueString="Assign content of my variables"
              onClick={onAssignVariables}
              disabled={onDisableNextButton}
              $submitOnly={currentStep === 3}
            />
          </ButtonContainer>
          {((xVariable.length >= 1) && (yVariable.length >= 1)) && 
            <Paragraph>Variables assigned!</Paragraph>
          }
        </Container>
        <ButtonContainer>
          <Button $variant="back" onClick={onBack}>
            Back
          </Button>
          <Button
            onClick={onNext}
            disabled={hasNotCompletedStep3}
            $variant="next"
          >
            Next
          </Button>
        </ButtonContainer>
      </form>
    </>
  );
}
