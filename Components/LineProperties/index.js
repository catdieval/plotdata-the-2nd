import { StyledH3 } from "../Heading";
import Container from "../Container";
import DropDownMenu from "../DropDownMenu";
import Paragraph from "../Paragraph";
import {
  lineColorArray,
  lineStyleArray,
  lineWidthArray,
} from "../../lib/listOfLineProperties";

export default function LineProperties({ 
  onSettingsChange,
  settings, 
}) {
  
  return (
      <Container $centered="center" $margin>
        <StyledH3>Line properties</StyledH3>
        <Paragraph>Line color:</Paragraph>
        <DropDownMenu
          nameString="lineColor"
          onChange={onSettingsChange}
          arrayOfOptions={lineColorArray}
        />
        {(settings.lineColor.length != 0) && (
          <Paragraph>Line color: <b>{settings.lineColor}</b></Paragraph>
        )}
        <br />
        <br />
        <Paragraph>Line style:</Paragraph>
        <DropDownMenu
          nameString="lineStyle"
          onChange={onSettingsChange}
          arrayOfOptions={lineStyleArray}
        />
        {(settings.lineStyle.length != 0) && (
          <Paragraph>Line style: <b>{settings.lineStyle}</b></Paragraph>
        )}
        <br />
        <br />
        <Paragraph>Line width (in pixels):</Paragraph>
        <DropDownMenu
          nameString="lineWidth"
          onChange={onSettingsChange}
          arrayOfOptions={lineWidthArray}
        />
        {((settings.lineWidth != null) && (settings.lineWidth != "")) && (
          <Paragraph>Line width: <b>{settings.lineWidth}</b></Paragraph>
        )}
      </Container>
  );
}
