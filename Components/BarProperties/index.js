import { barColorArray } from "../../lib/listOfBarProperties.js";
import DropDownMenu from "../DropDownMenu";
import Container from "../Container";
import { StyledH3 } from "../Heading";
import Paragraph from "../Paragraph";

export default function BarProperties({ 
  onSettingsChange, 
  settings,
  }) {
  
  return (
    <>
      <Container $centered="center" $margin>
        <StyledH3>Bar properties</StyledH3>
          <Paragraph>Bar color:</Paragraph>
          <DropDownMenu
            nameString="barColor"
            onChange={onSettingsChange}
            arrayOfOptions={barColorArray}
          />
          {(settings.barColor.length != 0) && (
            <Paragraph>Bar color: <b>{settings.barColor}</b></Paragraph>
          )}
      </Container>
    </>
  );
}
