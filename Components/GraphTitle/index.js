import Paragraph from "../Paragraph";
import Container from "../Container";
import InputTypeText from "../InputTypeText";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import Button from "../Button";

export default function GraphTitle({ 
  onDisableNextButton, 
  onNext, 
  onBack, 
  settings, 
  onSettingsChange, 
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <Paragraph>For the x-axis label you chose: <b>{settings.xLabel}</b></Paragraph>
      <Paragraph>For the y-axis label you chose: <b>{settings.yLabel}</b></Paragraph>
      <br />
      <form onSubmit={handleSubmit}>
        <Container $centered="center" $margin_bottom>
          <InputTypeText
            idString={"Title"}
            nameString="titleLabel"
            placeholderString={"Fill me with a title"}
            onChange={onSettingsChange}
          />
          {(settings.titleLabel.length != 0) && (
            <Paragraph>Title: <b>{settings.titleLabel}</b></Paragraph>
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
