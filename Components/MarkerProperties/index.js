import { StyledH3 } from "../Heading";
import Container from "../Container";
import Paragraph from "../Paragraph";
import DropDownMenu from "../DropDownMenu";
import {
  markerColorArray,
  markerSymbolArray,
  markerSizeArray,
} from "../../lib/listOfMarkerProperties";

export default function MarkerProperties({ 
  onSettingsChange,
  settings, 
}) {

  return (
    <>
      <Container $centered="center" $margin>
        <StyledH3>Marker properties</StyledH3>
          <Paragraph>Marker color:</Paragraph>
          <DropDownMenu
            nameString="markerColor"
            onChange={onSettingsChange}
            arrayOfOptions={markerColorArray}
          />
          {(settings.markerColor.length != 0) && (
          <Paragraph>Line color: <b>{settings.markerColor}</b></Paragraph>
          )}
          <br />
          <br />
          <Paragraph>Marker symbol:</Paragraph>
          <DropDownMenu
            nameString="markerSymbol"
            onChange={onSettingsChange}
            arrayOfOptions={markerSymbolArray}
          />
          {(settings.markerSymbol.length != 0) && (
          <Paragraph>Marker symbol: <b>{settings.markerSymbol}</b></Paragraph>
          )}
          <br />
          <br />
          <Paragraph>Marker size (in pixels):</Paragraph>
          <DropDownMenu
            nameString="markerSize"
            onChange={onSettingsChange}
            arrayOfOptions={markerSizeArray}
          /> 
          {((settings.markerSize != null) && (settings.markerSize != "")) && (
          <Paragraph>Marker size: <b>{settings.markerSize}</b></Paragraph>
        )}
      </Container>
    </>
  );
}
