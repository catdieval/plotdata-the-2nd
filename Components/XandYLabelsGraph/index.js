import Paragraph from "../Paragraph";
import InputTypeText from "../InputTypeText";
import Container from "../Container";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import Button from "../Button";

export default function XandYLabelsGraph({ 
  onDisableNextButton, 
  onNext, 
  onBack, 
  xKey, 
  yKey, 
  onSettingsChange, 
  settings,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Paragraph>For the x variable you chose: <b>{xKey}</b></Paragraph>
      <Paragraph>For the y variable you chose: <b>{yKey}</b></Paragraph>
      <br />
      <form onSubmit={handleSubmit}>
        <Container $centered="center" $margin_bottom>
          <InputTypeText
            idString={"Label for the x-axis"}
            nameString="xLabel"
            placeholderString={"Fill me with name and unit, e.g. Age (years)"}
            onChange={onSettingsChange}
          />
          {(settings.xLabel.length != 0) && (
            <Paragraph>x-axis label: <b>{settings.xLabel}</b></Paragraph>
          )}
          <br />
          <br />
          <InputTypeText
            idString={"Label for the y-axis"}
            nameString="yLabel"
            placeholderString={
              "Fill me with name and unit, e.g. Height (inches)"
            }
            onChange={onSettingsChange}
          />
          {(settings.yLabel.length != 0) && (
            <Paragraph>y-axis label: <b>{settings.yLabel}</b></Paragraph>
          )}
        </Container>
        <ButtonContainer>
          <Button $variant="back" onClick={onBack}>
            Back
          </Button>
          <InputTypeSubmit
            valueString="Next"
            onClick={onNext}
            disabled={onDisableNextButton}
          />  
        </ButtonContainer>
      </form>
    </>
  );
}
