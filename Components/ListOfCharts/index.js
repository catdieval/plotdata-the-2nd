import Container from "../Container";
import ChartItem from "../ChartItem";
import { chartArray } from "../../lib/listOfPlotTypes";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import Button from "../Button";
import WarningMessage from "../WarningMessage";

export default function ListOfCharts({ 
  onDisableNextButton, 
  onNext, 
  onBack, 
  onSelectChartType, 
  clickedChartType, 
  clickedSteps,
  hasNotEnteredBarProperties,
  hasNotEnteredLineProperties,
  hasNotEnteredMarkerProperties,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  const chartIndex = chartArray.findIndex((chart) => chart.name === clickedChartType); 
  
  let hasNotEnteredPlotProperties = new Array(4);
  hasNotEnteredPlotProperties[0] = hasNotEnteredBarProperties;
  hasNotEnteredPlotProperties[1] = hasNotEnteredLineProperties;
  hasNotEnteredPlotProperties[2] = hasNotEnteredMarkerProperties;
  hasNotEnteredPlotProperties[3] = (hasNotEnteredLineProperties || hasNotEnteredMarkerProperties);


  return (
    <>
    <form onSubmit={handleSubmit}>
    <Container $wrap="wrap">
      {chartArray.map(({ name, icon }) => {
        return (
          <ChartItem
            key={name}
            icon={icon}
            name={name}
            clickedChartType={clickedChartType}
            onSelectChartType={() => onSelectChartType(name)}
          />
        );
      })}
    </Container>
    {chartArray.map(({name}) => {
      return (
        (clickedSteps.includes(6) && (clickedChartType === name) &&
         hasNotEnteredPlotProperties[chartIndex]) && (
          <Container $centered="center">
            <WarningMessage 
              buttonMessage="OK, I have understood!"
              message="You have changed to a type of chart, whose properties are not yet set! In order to continue with this chart, go to Step 6 to choose new chart properties!"
            />
          </Container>
      ));
    })}  
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
