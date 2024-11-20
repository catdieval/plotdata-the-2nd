import InputTypeRadio from "../InputTypeRadio";
import Paragraph from "../Paragraph";
import Container from "../Container";
import DropDownMenu from "../DropDownMenu";
import { lineStyleArray } from "../../lib/listOfLineProperties";

export default function GridProperties({ 
  settings, 
  onSettingsChange, 
}) {
  return (
    <>
      <Container $centered="center">
        <Paragraph $variant="border">
          Show grid (helper lines) for axes:
        </Paragraph>
      </Container>
      <Container $wrap="wrap">
        <Container $direction="column" $center>
          <Container $centered="center">
            <Paragraph $variant="bold">For x-axis:</Paragraph>
            <Container $direction="row">
              <InputTypeRadio
                nameString="gridXAxis"
                valueString="true"
                idString="yes"
                onChange={onSettingsChange}
                labelString="Yes"
              />
              <InputTypeRadio
                nameString="gridXAxis"
                valueString="false"
                idString="no"
                onChange={onSettingsChange}
                labelString="No"
              />
            </Container>
          </Container>
          {(settings.gridXAxis.length != 0) && (
            <Paragraph>Show x-axis grid: <b>{settings.gridXAxis}</b></Paragraph>
          )}
        </Container>
        <Container $direction="column" $center>
          <Container $centered="center">
            <Paragraph $variant="bold">For y-axis:</Paragraph>
            <Container $direction="row">
              <InputTypeRadio
                nameString="gridYAxis"
                valueString="true"
                idString="yes"
                onChange={onSettingsChange}
                labelString="Yes"
              />
              <InputTypeRadio
                nameString="gridYAxis"
                valueString="false"
                idString="no"
                onChange={onSettingsChange}
                labelString="No"
              />
            </Container>
          </Container>
          {(settings.gridYAxis.length != 0) && (
            <Paragraph>Show y-axis grid: <b>{settings.gridYAxis}</b></Paragraph>
          )}
        </Container>
      </Container>
      {(settings.gridXAxis === "true" || settings.gridYAxis === "true") && (
        <Container $centered="center">
          <Paragraph $variant="border">Grid linestyle:</Paragraph>
        </Container>
      )}
      <Container $wrap="wrap">
        {settings.gridXAxis === "true" && (
          <DropDownMenu
            idString="x-axis"
            nameString="gridLineStyleXAxis"
            arrayOfOptions={lineStyleArray}
            onChange={onSettingsChange}
          />
        )}
        {settings.gridYAxis === "true" && (
          <DropDownMenu
            idString="y-axis"
            nameString="gridLineStyleYAxis"
            arrayOfOptions={lineStyleArray}
            onChange={onSettingsChange}
          />
        )}
      </Container>
    </>
  );
}
